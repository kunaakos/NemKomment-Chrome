function kussol_HVG(){
    $(".commentbox, #commentForm, .more2").remove();
    $('a[href$="#comments"]').html("Nem érdekelnek a kommentek.");
    $(".hthree").html("A kommentek olvasgatása nem fér bele a napodba. Eltávolítottam őket.");
};

function kussol_444(){
    $(".comments, #fb-comments-container").remove();
    $(".comments-title").html("<span>Nem érdekelnek a kommentek!</span>");
};

function kussol_NOL(){
	$("tfoot, #kommentek").remove();
	$('a[href$="#kommentek"]').html("Nem érdekelnek a kommentek.");
};

function kussol_MNO(){
	$(".comments, .hsz").remove();
};

function kussol_mandiner(){
	$(".comments2, #comments").remove();
};

function kussol_CINK(){
	$('a[href$="#replies"], .replies-wrapper, .reply-to-post').hide();
};

function kussol_MANCS(){
	$("#kommentek, .kommentekbox, .newcomment, .lastchild").remove();
};

function kussol_ORIGO(){
	$('#comments').remove();
};

$(document).ready(function() {
	
	var currentSite = window.location.origin;

	console.log( currentSite );
	
	switch (currentSite) {
		case "http://hvg.hu":
			kussol_HVG();
			break;
		case "http://444.hu":
			kussol_444();
			break;
		case "http://nol.hu":
			kussol_NOL();
			break;
		case "http://mno.hu":
			kussol_MNO();
			break;
		case "http://mandiner.hu":
			kussol_mandiner();
			break;
		case "http://cink.hu":
			kussol_CINK();
			break;
		case "http://magyarnarancs.hu":
			kussol_MANCS();
			break;
		case "http://www.origo.hu":
			kussol_ORIGO();
			break;
	}
});