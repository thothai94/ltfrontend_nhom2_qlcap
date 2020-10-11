import { Component, OnInit } from '@angular/core';
import { SoiCapService } from './../../services/soi-cap.service';

@Component({
  selector: 'app-soicap',
  templateUrl: './soicap.component.html',
  styleUrls: ['./soicap.component.css']
})
export class SoicapComponent implements OnInit {

  loading: boolean = false;
  newSoiCapName: string = '';
  newSoiCapStatus: string = '0';
  newSoiCapId: string = '0';
  soiCaps: any[] = [];

  constructor(private SoiCapService: SoiCapService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.SoiCapService.getListSoiCap().subscribe(
      (data: any) => {
        console.log(data);
        this.soiCaps = data.data;
        localStorage.setItem('ds_SoiCap', JSON.stringify(data.data));
        // console.log(this.SoiCaps.length);
      },
      (error: any) => {
        alert('Không lấy được danh sách sợi cáp');
      }
    );
  }

  removeSoiCap(id:string) {
    let r = confirm('Bạn có chắc muốn xoá sợi cáp này?');
    if(r) {
      this.SoiCapService.removeSoiCap(id).subscribe(
        (data:any) => {
          console.log(data);
          this.getList();
          alert(data.data);
        },
        (error: any) => {
          alert('Không xoá được sợi cáp');
        }
      );
    }

  }

  addNewSoiCap() {
    this.SoiCapService
      .addSoiCap(
        this.newSoiCapName,
        this.newSoiCapStatus,
        this.newSoiCapId      )
      .subscribe(
        (data: any) => {
          alert('Thêm sợi cáp thành công');
          $('#soi-cap-form-modal').modal('hide');
          this.getList();
          this.newSoiCapName = '';
          this.newSoiCapStatus = '0';
          this.newSoiCapId = '0';
        },
        (error: any) => {
          alert(error.error.message);
        }
      );
  }

  getSoiCap(id: string) {
    this.soiCaps = JSON.parse(localStorage.getItem('ds_SoiCap'));
    
    var index = this.soiCaps.findIndex(x => x.soi_id === id);
    console.log(index);
    console.log(this.soiCaps[index]);
    this.newSoiCapId = this.soiCaps[index].soi_id;
    this.newSoiCapName = this.soiCaps[index].ten_soi;
    this.newSoiCapStatus = this.soiCaps[index].trang_thai;
    $('#soi-cap-update-form-modal').modal('show');
  }

  updateSoiCap(id:number, name:string) {
    this.SoiCapService.editSoiCap(this.newSoiCapName,
      this.newSoiCapStatus,
      this.newSoiCapId).subscribe(
      (data:any) => {
        console.log(data);
        alert(data.data);

        this.getList();
        // this.newSoiCapName = data.object.categoryName;
      },
      (error: any) => {
        alert(error.error.message);
      }
    );
    $('#soi-cap-update-form-modal').modal('hide');
  }
}
