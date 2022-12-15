# OpenSource

### Author(s):
* Kun Kang
* Sean Ebenmelu
* Ifeanyichukwu Onyeanakwe

### Date: November 29, 2022

## Project Host Link
https://opensource-ac4a5.web.app

## Project Description
OpenSource is a platform that allows users to share and build project ideas and program solutions to pertinent problems. It’s a web app that connects both students and faculty members and provides an avenue for passion projects to be pursued by interested people across different departments. It also allows students to seek clarification on schoolwork and personal projects from knowledgeable faculty and students.

## Project Features
Our web app will allow users to create posts that:
* Request for help with assignments and projects.
* Share a passion project that they would like to build with people.
Users can respond to those posts with images, links, and text to provide solutions. The web app also allows users to create accounts and sign in with usernames and passwords.

## Notes on Running the Project
There are some node modules issues that came up with Angular 15 that needs to be addressed after each clone and ```npm install```.
The file : /node_modules/@angular/fire/compat/firestore/interfaces.d.ts contains a couple issues.
* On line 13 that reads ```export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot {``` should instead be changed to ```export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentData {```
* On line 23 that reads ```export interface QueryDocumentSnapshot<T> extends firebase.firestore.QueryDocumentSnapshot {``` should instead be changed to ```export interface QueryDocumentSnapshot<T> extends firebase.firestore.DocumentData {```
* On line 26 that reads ```export interface QuerySnapshot<T> extends firebase.firestore.QuerySnapshot {``` should instead be changed to ```export interface QuerySnapshot<T> extends firebase.firestore.QueryDocumentSnapshot {```
* On line 29 that reads ```export interface DocumentChange<T> extends firebase.firestore.DocumentChange {``` should instead be changed to ```export interface DocumentChange<T> extends firebase.firestore.DocumentData {```
