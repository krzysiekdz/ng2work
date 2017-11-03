import { Injectable } from '@angular/core';
import * as $ from 'jquery';

var model = {
	user:{
		id:0,
		name:'',
		email:'',
		parent:1,
		islogged:false,
		branch:0,
		status:100,
	},
	users:[],
	users_loaded:false,
	companies:[],
};

var login_check_url='http://spa.localhost/account/login';
var create_user_url='http://spa.localhost/account/register';
var get_users_url='http://spa.localhost/account/users_list';
var get_companies_url='http://spa.localhost/account/companies_list';

@Injectable()
export class UserService {
	

	constructor() {
	}

	setUser(row) {
		var u=model.user;
		u.id=row.id;
		u.name=row.pname;
		u.email=row.pemail;
		u.parent=row.idparent;
		u.islogged=true;
		u.branch=row.idbranch;
		u.status=row.b2b_status;
	}

	setUsers(rows) {
		model.users=[];
		for(var i=0; i<rows.length; i++) {
			var u:any={}, row=rows[i];
			u.id=row.id;
			u.name=row.pname;
			u.email=row.pemail;
			model.users.push(u);
		}
	}

	test(type) {
		// if(type==='admin') return model.user.status < 10;
		// else (type==='admin_br') return model.user.status < 20;
		// else if (type==='user') return model.user.status >= 20;
		// else return false;
	}

	getUserObj() {
		return model.user;
	}

	getUsersObj() {
		return model.users;
	}

	usersLoaded() {
		return model.users_loaded;
	}


	getUser(): Promise<any> {
		let self=this;
		return new Promise(function(resolve, reject)  {
			if(model.user.id > 0) resolve(model.user);
			else $.post(login_check_url, {ajax:1, test:1, save:-1, mock:1} )
				.done(function(res) {
					res=JSON.parse(res);
					if(res.result) self.setUser(res.row);
				})
				.always(function() {
					resolve(model.user);
				})
				;
			// else $.ajax(
			// 	{
			// 		type: 'post',
			// 		url: login_check_url,
			// 		crossDomain:true,
			// 		dataType:"json",
			// 		xhrFields: {withCredentials: true},
			// 		data: {ajax:1, test:1, save:-1},
			// 		success: function(res){console.log(res); resolve(model.user);}
			// 	});

				

		});
	}

	createUser(email, pass, name, idparent):Promise<any> {
		return new Promise(function(resolve, reject) {
			$.post(create_user_url, {
				ajax:1, save:1, 
				pemail:email, pname:name, ppass1:pass, ppass2:pass, idparent:idparent, b2b_status:1,
				account_type:'consumer', pstreet: 'none', pcity:'none', ppostcode:'none', pcountry:'none', pregulations:'none',
			})
			.done(function(res) {
				res=JSON.parse(res);
				// console.log('done:',res);
				resolve(res);
			})
			.fail(function(err) {
				console.log('fail:',err);
				resolve(err);
			})
			;
			// setTimeout(function() {
			// 	resolve();
			// }, 2000);
		});
	}

	getUsers(id):Promise<any> {
		var self=this;
		return new Promise(function(resolve, reject) {
			$.post(get_users_url, {
				ajax:1, iduser:id,
			})
			.done(function(res) {
				res=JSON.parse(res);
				self.setUsers(res.users);
				model.users_loaded=true;
				// console.log('done users list:',res);
				resolve(model.users);
			})
			.fail(function(err) {
				console.log('fail users list:',err);
				resolve(err);
			})
			;
		});
	}

	getCompanies():Promise<any> {
		var self=this;
		return new Promise(function(resolve, reject) {
			$.post(get_companies_url, {
				ajax:1, uid:model.user.id,
			})
			.done(function(res) {
				res=JSON.parse(res);
				// self.setCompanies(res.companies);
				console.log('done companies list:',res);
				resolve(model.companies);
			})
			.fail(function(err) {
				console.log('fail companies list:',err);
				resolve(err);
			})
			;
		});
	}



	
}