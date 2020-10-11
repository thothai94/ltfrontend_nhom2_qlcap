import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '-'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TuyenCapService {
  apiUrl: string = 'http://ec2-54-169-202-121.ap-southeast-1.compute.amazonaws.com:8002';
  constructor(
    private httpClient: HttpClient
  ) { }

  getListTuyenCap() {
    return this.httpClient.get(this.apiUrl + '/api/v1/tuyencap/getList', {
    });
  }

  removeTuyenCap(id:string) {
    return this.httpClient.delete(this.apiUrl + '/api/v1/tuyencap/delete/' + id, {
    });
  }

  addTuyenCap(name: string, status: string, id: string, long: string, year: string) {
    return this.httpClient.post(
      this.apiUrl + '/api/v1/tuyencap/create',
        {
          "tuyen_id": id,
          "ten_tuyen": name,
          "trang_thai": status,
          "chieu_dai_tuyen": long,
          "ly_trinh_dau": "Test",
          "ly_trinh_cuoi": " TestKm17+800/QL1A",
          "ghi_chu": "Trạm TYN /HDG quản lý từ Km 94 -Km 80/QL4B ( quản lý cáp 17Km )",
          "nam_khai_thac": year,
          "quoc_lo": "QL4B và QL1A",
          "ptld_id": 1,
          "suy_hao_thiet_ke": ""
      }
    );
  }

  editTuyenCap(name: string, status: string, id: string, long: string, year: string) {
    return this.httpClient.put(
      this.apiUrl + '/api/v1/tuyencap/update/' + id, 
      {
        "tuyen_id": id,
        "ten_tuyen": name,
        "trang_thai": status,
        "chieu_dai_tuyen": long,
        "nam_khai_thac": year
      }
    );
  }
}
