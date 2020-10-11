import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoiCapService {

  apiUrl: string = 'http://ec2-54-169-202-121.ap-southeast-1.compute.amazonaws.com:8002';
  constructor(
    private httpClient: HttpClient
  ) { }

  getListSoiCap() {
    return this.httpClient.get(this.apiUrl + '/api/v1/soicap/getList', {
    });
  }

  removeSoiCap(id:string) {
    return this.httpClient.delete(this.apiUrl + '/api/v1/soicap/delete/' + id, {
    });
  }

  addSoiCap(name: string, status: string, id: string) {
    return this.httpClient.post(
      this.apiUrl + '/api/v1/soicap/create',
        {
          "cl_id": "1065",
            "doan_id": "12",
            "dvsd_id": "1",
            "soi_id": id,
            "tbsd_id": "1",
            "ten_soi": name,
            "thiet_bi": "1",
            "trang_thai": status
      }
    );
  }

  editSoiCap(name: string, status: string, id: string) {
    return this.httpClient.put(
      this.apiUrl + '/api/v1/soicap/update/' + id, 
      {
        "soi_id": id,
        "ten_soi": name,
        "trang_thai": status  }
    );
  }
}
