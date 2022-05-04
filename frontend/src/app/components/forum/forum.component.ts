import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { AuthService } from 'src/app/services/auth.service';
import { ForumService } from 'src/app/services/forum.service';



@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(
    private service: ForumService, 
    private authService: AuthService,
    public router: Router) { }

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

  guestLogged() {
    const role = this.authService.getRoleCookie()
    return ( role === 'guest')
  }

}
