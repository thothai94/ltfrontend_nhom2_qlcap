import { TuyenCapService } from './../../services/tuyen-cap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuyencap',
  templateUrl: './tuyencap.component.html',
  styleUrls: ['./tuyencap.component.css'],
})
export class TuyencapComponent implements OnInit {
  loading: boolean = false;
  newTuyenCapName: string = '';
  newTuyenCapStatus: string = '0';
  newTuyenCapId: string = '0';
  newTuyenCapYear: string = '0';
  newTuyenCapLong: string = '0';
  tuyenCaps: any[] = [];

  constructor(private tuyenCapService: TuyenCapService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.tuyenCapService.getListTuyenCap().subscribe(
      (data: any) => {
        // console.log(data);
        this.tuyenCaps = data.data;
        localStorage.setItem('ds_tuyencap', JSON.stringify(data.data));
        // console.log(this.tuyenCaps.length);
      },
      (error: any) => {
        alert('Không lấy được danh sách tuyến cáp');
      }
    );
  }

  removeTuyenCap(id:string) {
    let r = confirm('Bạn có chắc muốn xoá tuyến cáp này?');
    if(r) {
      this.tuyenCapService.removeTuyenCap(id).subscribe(
        (data:any) => {
          console.log(data);
          this.getList();
          alert(data.data);
        },
        (error: any) => {
          alert('Không xoá được tuyến cáp');
        }
      );
    }

  }

  addNewTuyenCap() {
    this.tuyenCapService
      .addTuyenCap(
        this.newTuyenCapName,
        this.newTuyenCapStatus,
        this.newTuyenCapId,
        this.newTuyenCapLong,
        this.newTuyenCapYear
      )
      .subscribe(
        (data: any) => {
          alert('Thêm tuyến cáp thành công');
          $('#tuyen-cap-form-modal').modal('hide');
          this.getList();
          this.newTuyenCapName = '';
          this.newTuyenCapStatus = '0';
          this.newTuyenCapId = '0';
          this.newTuyenCapLong = '0';
          this.newTuyenCapYear = '0';
        },
        (error: any) => {
          alert(error.error.message);
        }
      );
  }

  getTuyenCap(id: string) {
    // this.tuyenCapService.getTuyenCapById(id).subscribe(
    //   (data:any) => {
    //     console.log(data);
    //     // alert(data.message);

    //     // this.getList();
    //     this.newTuyenCapName = data.object.categoryName;
    //     this.newTuyenCapName = '';
    //     this.newTuyenCapStatus = "0";
    //     this.newTuyenCapId = "0";
    //     this.newTuyenCapLong = "0";
    //     this.newTuyenCapYear = '0';
    //   },
    //   (error: any) => {
    //     alert(error.error.message);
    //   }
    // );
    console.log(id);
    this.tuyenCaps = JSON.parse(localStorage.getItem('ds_tuyencap'));
    
    var index = this.tuyenCaps.findIndex(x => x.tuyen_id === id);
    console.log(index);
    console.log(this.tuyenCaps[index]);
    this.newTuyenCapId = this.tuyenCaps[index].tuyen_id;
    this.newTuyenCapName = this.tuyenCaps[index].ten_tuyen;
    this.newTuyenCapStatus = this.tuyenCaps[index].trang_thai;
    this.newTuyenCapLong = this.tuyenCaps[index].chieu_dai_tuyen;
    this.newTuyenCapYear = this.tuyenCaps[index].nam_khai_thac;
    $('#tuyen-cap-update-form-modal').modal('show');
  }

  updateTuyenCap(id:number, name:string) {
    this.tuyenCapService.editTuyenCap(this.newTuyenCapName,
      this.newTuyenCapStatus,
      this.newTuyenCapId,
      this.newTuyenCapLong,
      this.newTuyenCapYear).subscribe(
      (data:any) => {
        console.log(data);
        alert(data.message);

        this.getList();
        // this.newTuyenCapName = data.object.categoryName;
      },
      (error: any) => {
        alert(error.error.message);
      }
    );
    $('#tuyen-cap-update-form-modal').modal('hide');
  }
}
