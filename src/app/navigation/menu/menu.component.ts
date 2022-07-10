import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { DataSharingService } from '../../core/services/datasharing.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	
	isPortal = false;


	room: any;
		
	constructor(
		private router: Router,
		private dataSharingService: DataSharingService
		
	){}

	ngOnInit(): void {
	}
	
	public redirectToHome = () => {
		this.isPortal = false;
		this.dataSharingService.isPortal.next(false);
		//const url = `/contact`;
		//this.router.navigate([url]);
		return false;
	}

	public redirectToAbout = () => {
		this.isPortal = true;
		this.dataSharingService.isPortal.next(true);
		const url = `/about`;
		this.router.navigate([url]);
		return false;
	}

	public redirectToArticles = () => {
		this.isPortal = true;
		this.dataSharingService.isPortal.next(true);
		const url = `/articles`;
		this.router.navigate([url]);
		return false;
	}
	
	public redirectToPrivacy = () => {
		this.isPortal = true;
		this.dataSharingService.isPortal.next(true);
		const url = `/privacy`;
		this.router.navigate([url]);
		return false;
	}

	public redirectToContact = () => {
		this.isPortal = true;
		this.dataSharingService.isPortal.next(true);
		const url = `/contact`;
		this.router.navigate([url]);
		return false;
	}

	public redirectToContactsList = () => {
		this.isPortal = true;
		this.dataSharingService.isPortal.next(true);
		const url = `/contacts/list`;
		this.router.navigate([url]);
		return false;
	}

	public redirectToJobs = () => {
		this.isPortal = true;
		this.dataSharingService.isPortal.next(true);
		const url = `/jobs`;
		this.router.navigate([url]);
		return false;
	}

	public redirectToResumes = () => {
		this.isPortal = true;
		this.dataSharingService.isPortal.next(true);
		const url = `/resumes`;
		this.router.navigate([url]);
		return false;
	}

	public redirectToProfile = (profile:any) => {
		this.isPortal = true;
		this.dataSharingService.isPortal.next(true);
		const url = profile;
		this.router.navigate([url]);
		return false;
	}

	public redirectToProfiles = () => {
		this.isPortal = true;
		this.dataSharingService.isPortal.next(true);
		const url = '/profiles/list';
		this.router.navigate([url]);
		return false;
	}

	public redirectToVideo = (post: any) => {
		//const url = `/contacts/contact/video/${post.message}`;
		//this.router.navigate([url]);
		this.room = post.data;
		//this.room = this.currentUser.userName;
		var locationUrl = `/collaboration/collaboration-video-enter/video/${this.room}`;
		//var locationUrl = `/video-jitsi/video-jitsi-enter`;

		window.location.href = locationUrl;

	}

	public redirectToWebPhone(url: string) {
		this.isPortal = true;
		this.dataSharingService.isPortal.next(true);
		window.open('https://www.zdslogic.com/webphone.html','popup','width=600,height=1200'); 
		return false;					
	}
	
}
