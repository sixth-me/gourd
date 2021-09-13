import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  data: any = "暂无数据";

  constructor(private route: ActivatedRoute, private httpclient: HttpClient, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(this.route.snapshot.queryParams['id']);
    this.httpclient.get("http://localhost:4200/manager/user/list", { responseType: 'json' }).subscribe(item => {
      this.data = JSON.stringify(item);
    });
  }

}
