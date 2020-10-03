import { TuyenCapService } from './../../services/tuyen-cap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuyencap',
  templateUrl: './tuyencap.component.html',
  styleUrls: ['./tuyencap.component.css']
})
export class TuyencapComponent implements OnInit {

  loading:boolean = false;
  newTuyenCapName:string = '';
  newTuyenCapStatus:number = 0;
  newTuyenCapId:number = 0;
  newTuyenCapYear:string = "0";
  newTuyenCapLong:number = 0;
  tuyenCaps:[] = [];

  constructor(
    private tuyenCapService:TuyenCapService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.tuyenCapService.getListTuyenCap().subscribe(
      (data:any) => {
        // console.log(data);
        this.tuyenCaps = data.Danh_sach_Tuyen_cap;
        // console.log(this.tuyenCaps.length);
      },
      (error: any) => {
        alert('Không lấy được danh sách tuyến cáp');
      }
    );
  }

  // removeTuyenCap(id:number) {
  //   let r = confirm('Bạn có chắc muốn xoá category này?');
  //   if(r) {
  //     this.tuyenCapService.removeTuyenCap(id).subscribe(
  //       (data:any) => {
  //         this.getList();
  //         alert(data.message);
  //       },
  //       (error: any) => {
  //         alert(error.error.message);
  //       }
  //     );
  //   }
    
  // }

  addNewTuyenCap() {
    this.tuyenCapService.addTuyenCap(
      this.newTuyenCapName, 
      this.newTuyenCapStatus, 
      this.newTuyenCapId, 
      this.newTuyenCapLong, 
      this.newTuyenCapYear).subscribe(
      (data:any) => {
        alert('Thêm tuyến cáp thành công');
        // $('#tuyen-cap-form-modal').modal('hide');
        this.getList();
        this.newTuyenCapName = '';
        this.newTuyenCapStatus = 0; 
        this.newTuyenCapId = 0;
        this.newTuyenCapLong = 0; 
        this.newTuyenCapYear = '0';
      },
      (error: any) => {
        alert(error.error.message);
      }
    );
  }

  // getCategory(id:number) {
  //   this.modalTitle = 'Thông tin danh mục';
  //   this.categoryService.getCategoryById(id).subscribe(
  //     (data:any) => {
  //       // console.log(data);
  //       // alert(data.message);
        
  //       // this.getList();
  //       this.newCategoryName = data.object.categoryName;
  //     },
  //     (error: any) => {
  //       alert(error.error.message);
  //     }
  //   );
  //   // $('#category-form-modal').modal('show');
  // }

  // updateCategory(id:number, name:string) {
  //   this.categoryService.editCategory(name, id).subscribe(
  //     (data:any) => {
  //       // console.log(data);
  //       // alert(data.message);
        
  //       // this.getList();
  //       this.newCategoryName = data.object.categoryName;
  //     },
  //     (error: any) => {
  //       alert(error.error.message);
  //     }
  //   );
  //   // $('#category-form-modal').modal('hide');
  // }

}
