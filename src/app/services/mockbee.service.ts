import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Path } from '../models/Path';
import { Resource } from '../models/Resource';

@Injectable({
  providedIn: 'root'
})
export class MockbeeService {

  constructor(private http: HttpClient) { }

  GetData(name: string): Observable<any> {
    return this.http.get<any>('https://7og1o.wiremockapi.cloud/' + name);
  }

  GetPaths(): Observable<Path[]> {
    return this.http.get<Path[]>('https://7og1o.wiremockapi.cloud/paths');
  }

  GetPath(pathId: number): Observable<Path> {
    return this.http.get<Path>('https://7og1o.wiremockapi.cloud/path/' + pathId);
  }

  GetResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>('https://7og1o.wiremockapi.cloud/resources');
  }

  GetModules(): Observable<any[]> {
    return this.http.get<any[]>('https://7og1o.wiremockapi.cloud/modules');
  }

  GetPathModules(id: number): Observable<any[]> {
    return this.http.get<any[]>(`https://7og1o.wiremockapi.cloud/path/${id}/modules`);
  }

}
