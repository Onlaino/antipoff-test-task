export interface IPartnerData {
	page: number;
	per_page: number;
	support: IPartnerSupport;
	total: number;
	total_pages: number;
	data: IPartner[];
}

export interface IPartnerSingleResponse {
	data: IPartner,
	support: IPartnerSupport
} 

export interface IPartner {
	id: string;
	avatar: string;
	email: string;
	first_name: string;
	last_name: string;
	support: IPartnerSupport;
}

interface IPartnerSupport {
	text: string;
	url: string;
}
