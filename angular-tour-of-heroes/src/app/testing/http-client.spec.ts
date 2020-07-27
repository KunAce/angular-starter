// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

// Other imports
import { TestBed } from "@angular/core/testing";
import { HttpClient, HttpErrorResponse} from "@angular/common/http";

import { HttpHeaders } from "@angular/common/http";

interface Data {
  name: string;
}

const testUrl = '/data';

describe('HttpClient testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  // Tests begin
  it('can test HttpClient.get',() => {
    const testData: Data = {name: 'Test Data'};

    // Make an HTTP GET request
    httpClient.get<Data>(testUrl)
      .subscribe(data =>
      // When observable resolves, result should match test data
    expect(data).toEqual(testData));

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('/data');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

  it('can test HttpClient.get with matching header', () => {
    const testData: Data = {name: 'Test Data'};

    // Make an HTTP GET request with specific header
    httpClient.get<Data>(testUrl, {
      headers: new HttpHeaders({'Authorization':'my-auth-token'})
    })
      .subscribe(data =>
      expect(data).toEqual(testData));

    // Find request with a predictable function.
    // Expect one request with an authorization header
    const req = httpTestingController.expectOne(
      req => req.headers.has('Authorization')
    );
    req.flush(testData);
  });

  it('can test multiple requests', () => {
    let testData: Data[] = [
      {name: 'bob'},{name: 'carol'},
      {name: 'ted'},{name: 'alice'}
    ];

    // Make three requests in a row
    httpClient.get<Data[]>(testUrl)
      .subscribe(d => expect(d.length).toEqual(0, 'should have no data'));

    httpClient.get<Data[]>(testUrl)
      .subscribe(d=>expect(d).toEqual([testData[0]],'should be one element array'));

    httpClient.get<Data[]>(testUrl)
      .subscribe(d=>expect(d).toEqual(testData,'should be expected data'));

    // get all pending requests that match the given URL
    const requests = httpTestingController.match(testUrl);
    expect(requests.length).toEqual(3);

    // Respond to each request with different results
    requests[0].flush([]);
    requests[1].flush([testData[0]]);
    requests[2].flush(testData);
  });

  it('can test for 404 error',() =>{
    const emsg ="deliberate 404 error";

    httpClient.get<Data[]>(testUrl).subscribe(
      data => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse ) => {
        expect(error.status).toEqual(404,'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    const req = httpTestingController.expectOne(testUrl);

    // Respond with mock error
    req.flush(emsg, {status: 404, statusText:'Not Found'});
  });

});
