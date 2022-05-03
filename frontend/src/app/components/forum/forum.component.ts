import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { ForumService } from 'src/app/services/forum.service';



@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private service: ForumService) { }

  topics!: string[]
  newTopic!: string
  selectedTopic: string | undefined
  comment!: string;

  posts: Post[] = []

  ngOnInit(): void {
    this.service.getAllTopics().subscribe(
      (res) => {
        console.log(res)
        this.topics = res
        console.log(this.topics)
      }
    )
  }

  postNewTopic() {
    this.service.postTopic(this.newTopic).subscribe(
      (res) => {
        console.log("dodato!")
      }
    )
  }

  postNewComment() {
    this.service.postComment(this.selectedTopic!, this.comment, "email").subscribe(
      (res) => {
        console.log("dodato!")
      }
    )
  }

  getPosts() {
    if (this.selectedTopic !== undefined) {
      this.service.getTopic(this.selectedTopic!).subscribe(
        (res) => {
          console.log(res)
          this.posts = res
        }
      )
    }
  }

}
