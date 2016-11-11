/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 *  WL.Server.invokeHttp(parameters) accepts the following json object as an argument:
 *  
 *  {
 *  	// Mandatory 
 *  	method : 'get' , 'post', 'delete' , 'put' or 'head' 
 *  	path: value,
 *  	
 *  	// Optional 
 *  	returnedContentType: any known mime-type or one of "json", "css", "csv", "plain", "xml", "html"  
 *  	returnedContentEncoding : 'encoding', 
 *  	parameters: {name1: value1, ... }, 
 *  	headers: {name1: value1, ... }, 
 *  	cookies: {name1: value1, ... }, 
 *  	body: { 
 *  		contentType: 'text/xml; charset=utf-8' or similar value, 
 *  		content: stringValue 
 *  	}, 
 *  	transformation: { 
 *  		type: 'default', or 'xslFile', 
 *  		xslFile: fileName 
 *  	} 
 *  } 
 */

/**
 * @param interest
 *            must be one of the following: world, africa, sport, technology,
 *            ... (The list can be found in
 *            http://edition.cnn.com/services/rss/)
 * @returns json list of items
 */
function getStories(interest) {
	path = getPath(interest);

	var input = {
		method : 'get',
		returnedContentType : 'xml',
		path : path
	};

	return WL.Server.invokeHttp(input);
}
/**
 * 
 * @param interest
 *            must be one of the following: world, africa, sport, technology,
 *            ... (The list can be found in
 *            http://edition.cnn.com/services/rss/)
 * @returns json list of items
 */
function getStoriesFiltered(interest) {
	path = getPath(interest);

	var input = {
		method : 'get',
		returnedContentType : 'xml',
		path : path,
		transformation : {
			type : 'xslFile',
			xslFile : 'filtered.xsl'
		}
	};

	return WL.Server.invokeHttp(input);
}

// 登录验证
function loginvalidate(userId, pwd) {
	var path = '/padServer/LoginController/loginValidate';
	var req = {};
	req.userId = userId;
	req.pwd = pwd;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function validateTeller(userId) {
	var path = '/padServer/PadCommonController/validateTeller';
	var req = {};
	req.userId = userId;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function queryCityparam(id) {
	
	var path = '/padServer/PadCommonController/queryCityparam';
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : id
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}


function authvalidateTeller(userId,orgCode) {
	var path = '/padServer/PadCommonController/authvalidateTeller';
	var req = {};
	req.userId = userId;
	req.orgCode = orgCode;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}


function showIndexInfo() {
	var path = '/padServer/HomePageController/showIndexInfo';

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : ''
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}



function validatePwd(userId, pwd) {
	var path = '/padServer/PadCommonController/validatePwd';
	var req = {};
	req.userId = userId;
	req.pwd = pwd;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function validateFingerPrint(userId, pwd) {
	var path = '/padServer/PadCommonController/validateFingerPrint';
	var req = {};
	req.userId = userId;
	req.pwd = pwd;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

// 登录验证后签到并获取柜员信息
function loginsign(bsaTranRequest) {
	var path = '/padServer/LoginController/loginSign';
	var req = {};
	req.tranRequest = bsaTranRequest;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

// 联网核查
function docheck(bsaTranRequest) {
	var path = '/padServer/PadCommonController/doCheck';
	var req = {};
	req.tranRequest = bsaTranRequest;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function getSerialNo(bsaTranRequest) {
	var path = '/padServer/PadCommonController/getSerialNo';
	var req = {};
	req.tranRequest = bsaTranRequest;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function dymPwdGnrt(bsaTranContextObject) {
	var path = '/padServer/PadCommonController/dymPwdGnrt';
	var req = {};
	req.tranContextObject = bsaTranContextObject;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function dymPwdChk(bsaTranContextObject) {
	var path = '/padServer/PadCommonController/dymPwdChk';
	var req = {};
	req.tranContextObject = bsaTranContextObject;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function queryCardInfo(bsaTranContextObject) {
	var path = '/padServer/ChannelSigningController/queryCardInfo';
	var req = {};
	req.tranContextObject = bsaTranContextObject;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function checkAcPwd(bsaTranContextObject) {
	var path = '/padServer/ChannelSigningController/checkAcPwd';
	var req = {};
	req.tranContextObject = bsaTranContextObject;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function perSignApp(bsaTranContextObject) {
	var path = '/padServer/ChannelSigningController/perSignApp';
	var req = {};
	req.tranContextObject = bsaTranContextObject;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function perEbankCstInfInq(bsaTranContextObject) {
	var path = '/padServer/ChannelSigningController/perEbankCstInfInq';
	var req = {};
	req.tranContextObject = bsaTranContextObject;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function corSmsFun(bsaTranContextObject) {
	var path = '/padServer/ChannelSigningController/corSmsFun';
	var req = {};
	req.tranContextObject = bsaTranContextObject;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function perCheckLogId(bsaTranContextObject) {
	var path = '/padServer/ChannelSigningController/perCheckLogId';
	var req = {};
	req.tranContextObject = bsaTranContextObject;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function corSmsFee(bsaTranContextObject) {
	var path = '/padServer/ChannelSigningController/corSmsFee';
	var req = {};
	req.tranContextObject = bsaTranContextObject;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function corFee(bsaTranContextObject) {
	var path = '/padServer/ChannelSigningController/corFee';
	var req = {};
	req.tranContextObject = bsaTranContextObject;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function perEUseCanc(bsaTranContextObject) {
	var path = '/padServer/ChannelSigningController/perEUseCanc';
	var req = {};
	req.tranContextObject = bsaTranContextObject;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function poffList(bsaTranContextObject) {
	var path = '/padServer/ChannelSigningController/poffList';
	var req = {};
	req.tranContextObject = bsaTranContextObject;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function perPapMgmActT(bsaTranContextObject) {
	var path = '/padServer/ChannelSigningController/perPapMgmActT';
	var req = {};
	req.tranContextObject = bsaTranContextObject;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function ebankCustInfo(bsaTranContextObject) {
	var path = '/padServer/ChannelSigningController/ebankCustInfo';
	var req = {};
	req.tranContextObject = bsaTranContextObject;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function perBankLimit(bsaTranContextObject) {
	var path = '/padServer/ChannelSigningController/perBankLimit';
	var req = {};
	req.tranContextObject = bsaTranContextObject;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function signQryList(bsaTranContextObject) {
	var path = '/padServer/ChannelSigningController/signQryList';
	var req = {};
	req.tranContextObject = bsaTranContextObject;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function perTermSign(tranRequest) {
	var path = '/padServer/ChannelSigningController/perTermSign';
	var req = {};
	req.tranRequest = tranRequest;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function perTermSignBg(tranRequest) {
	var path = '/padServer/ChannelSigningController/perTermSignBg';
	var req = {};
	req.tranRequest = tranRequest;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function doAuthCommit(bsaTranRequest) {
	var path = '/padServer/PadCommonController/doAuthCommit';
	var req = {};
	req.tranRequest = bsaTranRequest;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function doAuthCancel(bsaTranRequest) {
	var path = '/padServer/PadCommonController/doAuthCancel';
	var req = {};
	req.tranRequest = bsaTranRequest;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function perTermSignPost(tranRequest) {
	var path = '/padServer/ChannelSigningController/perTermSignPost';
	var req = {};
	req.tranRequest = tranRequest;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function perTermSignBgPost(tranRequest) {
	var path = '/padServer/ChannelSigningController/perTermSignBgPost';
	var req = {};
	req.tranRequest = tranRequest;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function getCifTypeStr(List1) {
	var path = '/padServer/ChannelSigningController/getCifTypeStr';
	var req = {};
	req.List1 = List1;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},
	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

// 卡信息命名sql查询
function cardInfoQuery(bsaTranRequest) {
	var path = '/padServer/CardOpenController/cardInfoQuery';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

// 卡数量命名sql查询
function padCarryCardRegQuery(bsaTranRequest) {
	var path = '/padServer/CardOpenController/padCarryCardRegQuery';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function customerInfoQuery(bsaTranRequest) {
	var path = '/padServer/CardOpenController/customerInfoQuery';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function identifyingCodeQuery(bsaTranRequest) {
	var path = '/padServer/CardOpenController/identifyingCodeQuery';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

// 文件上传方法实现
function imageUpload(bsaTranRequest) {
	var path = '/padServer/PadCommonController/upLoadImage';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function cardOpen(bsaTranRequest) {
	var path = '/padServer/CardOpenController/cardOpen';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function getPath(interest) {
	if (interest == undefined || interest == '') {
		interest = '';
	} else {
		interest = '_' + interest;
	}
	return 'rss/edition' + interest + '.rss';
}

function inquire(index, num, queryCriteria) {
	var path = '/padServer/BusinessHandlingController/inquire';
	var req = {};
	req.index = index;
	req.num = num;
	req.queryCriteria = queryCriteria;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function productMain() {
	var path = '/padServer/ProductController/productMain';
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : ''
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function productDetail(PRODUCT_CODE) {
	var path = '/padServer/ProductController/productDetail';
	var req = {};
	req.PRODUCT_CODE = PRODUCT_CODE;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

// 根据流水号查询上下文
function inquireContextData(serial_no) {
	var path = '/padServer//BusinessHandlingController/inquireContextData';
	var req = {};
	req.serial_no = serial_no;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

/* 开卡第三步身份证检查客户号是否存在 9_13 */
function IDNoQuery(bsaTranRequest) {
	var path = '/padServer/CardOpenController/IDNoQuery';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}
/* 开卡第四步检查柜员重控类型是否存在 */
function judgeCardCategory(bsaTranRequest) {
	var path = '/padServer/CardOpenController/judgeCardCategory';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

/* 开卡第五步检查卡是否重开过 */
function cardIsOpen(bsaTranRequest) {
	var path = '/padServer/CardOpenController/cardIsOpen';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}
/* 开卡查询客户信息 */
function cardOpenCustemerInfoQuery(bsaTranRequest) {
	var path = '/padServer/CardOpenController/cardOpenCustemerInfoQuery';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

/* 开卡第六步 数据库查询卡号对应的重空号码是否是第数据库中的第一张 */
function isFirstStockFromDatabase(bsaTranRequest) {
	var path = '/padServer/CardOpenController/isFirstStockFromDatabase';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	return aa;
}

/* 开卡 获取 ProdCode */
function getProdCode(bsaTranRequest) {
	var path = '/padServer/CardOpenController/getProdCode';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}


/* 开卡 获取提交交易 */
function commitCardOpen(bsaTranRequest) {
	var path = '/padServer/CardOpenController/commitCardOpen';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}



/* 卡激活第一步查询卡状态和客户信息 */
function cardStatusQuery(bsaTranRequest) {
	var path = '/padServer/CardActiveController/cardStatusQuery';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

/* 卡激活第三步查询客户信息 */
function cardCustemerInfoQuery(bsaTranRequest) {
	var path = '/padServer/CardActiveController/cardCustemerInfoQuery';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

/* 卡激活第四步查询卡片信息确认是否需要验证码 */
function cardIsNeedMeesage(bsaTranRequest) {
	var path = '/padServer/CardActiveController/cardIsNeedMeesage';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

/* 卡激活第五步卡t24核查密码 */
function checkPassworld(bsaTranRequest) {
	var path = '/padServer/CardActiveController/checkPassworld';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

/* 卡激活提交交易 */
function cardActiveCommit(bsaTranRequest) {
	var path = '/padServer/CardActiveController/cardActiveCommit';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

// 出库提交
function padOut(bsaTranRequest) {
	var path = '/padServer/ChukuController/chukuActive';
	var req = {};
	req = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

// 出库检查
function padOutCheck(bsaTranRequest) {
	var path = '/padServer/ChukuController/ChukuMain';
	var req = {};
	req = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

// 出库确认
function getPad(bsaTranRequest) {
	var path = '/padServer/ChukuController/chukuCon';
	var req = {};
	req = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function getOutInfoFromTransno(bsaTranRequest) {
	var path = '/padServer/ChukuController/chukuSearch';
	var req = {};
	req = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

/* 开客户号 查询是否本行员工 */
function IsEmployee(bsaTranRequest) {
	var path = '/padServer/CustemerNoOpenController/IsEmployee';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

/* 开客户号 查询改该身份证是否在黑名单中 */
function IsInBlackList(bsaTranRequest) {
	var path = '/padServer/CustemerNoOpenController/IsInBlackList';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function openAccount(bsaTranRequest) {
	var path = '/padServer/CustemerNoOpenController/commitCardOpen';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	return aa;
}

function padBacked(bsaTranRequest) {
	var path = '/padServer/RukuController/padBacked';
	var req = {};
	req= bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function inquire_d(index,num,queryCriteria){
	var path = '/padServer/RukuController/inquire_back';
	var req = {};
	req.index = index;
	req.num = num;
	req.queryCriteria = queryCriteria;

	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function padOutChange(bsaTranRequest) {
	var path = '/padServer/ChukuController/chukuChange';
	var req = {};
	req= bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function padOutCancel(bsaTranRequest) {
	var path = '/padServer/ChukuController/chukuCancel';
	var req = {};
	req= bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function padBack(bsaTranRequest) {
	var path = '/padServer/RukuController/padBack';
	var req = {};
	req= bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

function CheckFromPNUM(bsaTranRequest) {
	var path = '/padServer/RukuController/padBackCheck';
	var req = {};
	req= bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

//检查柜员
function checkusedbyid(bsaTranRequest) {
	var path = '/padServer/ChukuController/checkusedbyoperator';
	var req = {};
	req= bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

//二次加密
function rePinBlock(bsaTranRequest) {
	var path = '/padServer/PadCommonController/rePinBlock';
	var req = {};
	req.bsaTranRequest= bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

/* t24核查密码 */
function checkPassword(bsaTranRequest) {
	var path = '/padServer/PadCommonController/checkPassword';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

/* 获取PAD所有图片路径 */
function getPadImageUrls(bsaTranRequest) {
	var path = '/padServer/ImageController/imageTrans';
	var req = {};
	req.bsaTranRequest = bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

//重空数量查询
function padBackCarryCardCount(bsaTranRequest) {
	var path = '/padServer/RukuController/carryCard';
	var req = {};
	req= bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}

// 开卡后更新数据库
function cardStatusChange(bsaTranRequest) {
	var path = '/padServer/CardOpenController/cardStatusChange';
	var req = {};
	req= bsaTranRequest;
	var input = {
		method : 'post',
		returnedContentType : 'json',
		returnedContentEncoding : 'UTF-8',
		headers : {
			SOAPAction : ''
		},
		path : path,
		body : {
			contentType : 'text/xml; charset=UTF-8',
			content : req
		},

	};
	var aa = WL.Server.invokeHttp(input);
	WL.Logger.info("SUCCESS:");
	return aa;
}
