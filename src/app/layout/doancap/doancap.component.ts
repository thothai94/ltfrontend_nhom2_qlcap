import { Component, OnInit } from '@angular/core';
import { DoanCapService } from './../../services/doan-cap.service';

@Component({
  selector: 'app-doancap',
  templateUrl: './doancap.component.html',
  styleUrls: ['./doancap.component.css']
})
export class DoancapComponent implements OnInit {

  loading: boolean = false;
  newDoanCapName: string = '';
  newDoanCapStatus: string = '0';
  newDoanCapId: string = '0';
  newDoanCapLong: string = '0';
  doanCaps: any[] = [];

  constructor(private DoanCapService: DoanCapService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.DoanCapService.getListDoanCap().subscribe(
      (data: any) => {
        // console.log(data);
        this.doanCaps = data.data;
        localStorage.setItem('ds_DoanCap', JSON.stringify(data.data));
        // console.log(this.DoanCaps.length);
      },
      (error: any) => {
        alert('Không lấy được danh sách đoạn cáp');
      }
    );
  }

  removeDoanCap(id:string) {
    let r = confirm('Bạn có chắc muốn xoá đoạn cáp này?');
    if(r) {
      this.DoanCapService.removeDoanCap(id).subscribe(
        (data:any) => {
          console.log(data);
          this.getList();
          alert(data.data);
        },
        (error: any) => {
          alert('Không xoá được đoạn cáp');
        }
      );
    }

  }

  addNewDoanCap() {
    this.DoanCapService
      .addDoanCap(
        this.newDoanCapName,
        this.newDoanCapStatus,
        this.newDoanCapId,
        this.newDoanCapLong
      )
      .subscribe(
        (data: any) => {
          alert('Thêm đoạn cáp thành công');
          $('#doan-cap-form-modal').modal('hide');
          this.getList();
          this.newDoanCapName = '';
          this.newDoanCapStatus = '0';
          this.newDoanCapId = '0';
          this.newDoanCapLong = '0';
        },
        (error: any) => {
          alert(error.error.message);
        }
      );
  }

  getDoanCap(id: string) {
    // this.DoanCapService.getDoanCapById(id).subscribe(
    //   (data:any) => {
    //     console.log(data);
    //     // alert(data.message);

    //     // this.getList();
    //     this.newDoanCapName = data.object.categoryName;
    //     this.newDoanCapName = '';
    //     this.newDoanCapStatus = "0";
    //     this.newDoanCapId = "0";
    //     this.newDoanCapLong = "0";
    //     this.newDoanCapYear = '0';
    //   },
    //   (error: any) => {
    //     alert(error.error.message);
    //   }
    // );
    console.log(id);
    this.doanCaps = JSON.parse(localStorage.getItem('ds_DoanCap'));
    
    var index = this.doanCaps.findIndex(x => x.doan_id === id);
    console.log(index);
    console.log(this.doanCaps[index]);
    this.newDoanCapId = this.doanCaps[index].doan_id;
    this.newDoanCapName = this.doanCaps[index].ten_doan;
    this.newDoanCapStatus = this.doanCaps[index].trang_thai;
    this.newDoanCapLong = this.doanCaps[index].cu_ly;
    $('#doan-cap-update-form-modal').modal('show');
  }

  updateDoanCap(id:number, name:string) {
    this.DoanCapService.editDoanCap(this.newDoanCapName,
      this.newDoanCapStatus,
      this.newDoanCapId,
      this.newDoanCapLong).subscribe(
      (data:any) => {
        console.log(data);
        alert(data.message);

        this.getList();
        // this.newDoanCapName = data.object.categoryName;
      },
      (error: any) => {
        alert(error.error.message);
      }
    );
    $('#doan-cap-update-form-modal').modal('hide');
  }

}
