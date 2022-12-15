import { Component, OnInit } from '@angular/core'
// firestorage for file upload
import { AngularFireStorage } from '@angular/fire/compat/storage'

// Auth Service
import { AuthService } from '../../app/shared/services/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { finalize } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-create-account',
  templateUrl: './sign-up.html',
  styleUrls: ['./sign-up.scss'],
})
export class SignUpComponent implements OnInit {
  downloadURL!: Observable<any>
  constructor(
    public authService: AuthService,
    private storage: AngularFireStorage,
    public firestore: AngularFirestore,
  ) {}
  // uploading file to angular firestorage
  // source: "Foundation of a file upload" https://blog.angular.io/file-uploads-come-to-angularfire-6842352b3b47
  uploadFile(event: any) {
    const file = event.target.files[0]
    const filePath = 'name-your-file-path-here'
    const fileRef = this.storage.ref(filePath)
    const task = this.storage.upload(filePath, file)

    // observe percentage changes
    // get notified when the download URL is available
    task
      .snapshotChanges()
      .pipe(finalize(() => (this.downloadURL = fileRef.getDownloadURL())))
      .subscribe()
    console.log(fileRef.getDownloadURL())
  }
  ngOnInit() {}
}
