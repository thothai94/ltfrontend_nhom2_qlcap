import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization': '-'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TuyenCapService {

  apiUrl:string = 'https://qlcap-services.herokuapp.com';

  constructor(
    private httpClient:HttpClient
  ) { }

  getListTuyenCap(){
    let accessToken = localStorage.getItem("access_token");

    return this.httpClient.get(this.apiUrl + '/Ma_so_Xu_ly=Doc_Danh_sach_Tuyen_cap', {
    });
  }

  // removeTuyenCap(id:number) {
  //   let accessToken = localStorage.getItem("access_token");
  //   let accessTokenHeader = "Bearer " + accessToken;
  //   httpOptions.headers = httpOptions.headers.set('Authorization', accessTokenHeader);

  //   return this.httpClient.delete('https://vnpt.fastlms.vn/api/Category/delete/' + id, {
  //     headers: httpOptions.headers
  //   });
  // }

  addTuyenCap(name:string, status:number, id: number, long:number, year:string) {
    httpOptions.headers = httpOptions.headers.set("Access-Control-Allow-Origin", '*');
    httpOptions.headers = httpOptions.headers.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    return this.httpClient.post(
      this.apiUrl + '/Ma_so_Xu_ly=Them_Tuyen_cap',
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
    },
    { headers: httpOptions.headers }
    );
  }

  // getTuyenCapById(id:number){
  //   let accessToken = localStorage.getItem("access_token");
  //   let accessTokenHeader = "Bearer " + accessToken;
  //   httpOptions.headers = httpOptions.headers.set('Authorization', accessTokenHeader);

  //   return this.httpClient.get('https://vnpt.fastlms.vn/api/Category/get-by-id/' + id, {
  //     headers: httpOptions.headers
  //   });
  // }

  // editTuyenCap(name:string, id: number) {
  //   let accessToken = localStorage.getItem("access_token");
  //   let accessTokenHeader = "Bearer " + accessToken;
  //   httpOptions.headers = httpOptions.headers.set('Authorization', accessTokenHeader);

  //   return this.httpClient.post(
  //     'https://vnpt.fastlms.vn/api/Category/edit', 
  //     {
  //       "id": id,
  //       "categoryName": name, 
  //     },
  //     { headers: httpOptions.headers }
  //   );
  // }
}
