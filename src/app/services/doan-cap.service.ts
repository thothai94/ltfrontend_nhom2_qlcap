import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoanCapService {

  apiUrl: string = 'http://ec2-54-169-202-121.ap-southeast-1.compute.amazonaws.com:8002';
  constructor(
    private httpClient: HttpClient
  ) { }

  getListDoanCap() {
    return this.httpClient.get(this.apiUrl + '/api/v1/doancap/getList', {
    });
  }

  removeDoanCap(id:string) {
    return this.httpClient.delete(this.apiUrl + '/api/v1/doancap/delete/' + id, {
    });
  }

  addDoanCap(name: string, status: string, id: string, long: string) {
    return this.httpClient.post(
      this.apiUrl + '/api/v1/doancap/create',
        {
          "doan_id": id,
    "ten_doan": name,
    "mo_ta": "",
    "ly_trinh_dau": "",
    "ly_trinh_cuoi": "",
    "tong_so_soi": "8",
    "suy_hao_thiet_ke": "",
    "trang_thai": status,
    "stt": "",
    "cu_ly": long,
    "tcs_id": "1",
    "ptld_id": "1",
    "hcc_lc_id": "1",
    "tuyen_id": "1",
    "so_soi_id": "1"
      }
    );
  }

  editDoanCap(name: string, status: string, id: string, long: string) {
    return this.httpClient.put(
      this.apiUrl + '/api/v1/doancap/update/' + id, 
      {
        "doan_id": id,
        "ten_doan": name,
        "trang_thai": status,
        "cu_ly": long      }
    );
  }
}
