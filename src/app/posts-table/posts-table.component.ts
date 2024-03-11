import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { PostServiceService } from '../services/post-service.service';
import { Post } from '../models/Post';

@Component({
	selector: 'ngbd-table-pagination',
	standalone: true,
	imports: [DecimalPipe, FormsModule, NgbTypeaheadModule, NgbPaginationModule],
	templateUrl: './posts-table.component.html',
})
export class PostsTableComponent implements OnInit {

	POSTS: Post[] = [];
	posts: Post[] = [];

	page = 1;
	pageSize = 10;
	collectionSize = this.POSTS.length;

	constructor(private postService: PostServiceService) {}

	ngOnInit() {
		this.postService.GetPosts()
			.subscribe((res) => {
				this.POSTS = res;
				this.collectionSize = this.POSTS.length;
			});
	}

	refreshPosts() {
		this.posts = this.POSTS.map((post, i) => ({ id: i + 1, ...post })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}