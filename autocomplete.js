let availableKeywords=[
    'Annamyya Bhavan',
    'Srinivasa Auditorium',
    'University Library',
    'Administration Building',
    'Directorate Of Student Welfare And Cultural Affairs',
    'Green Energy Building',
    'Old MBA Building',
    'DEPARTMENT OF DISTANCE EDUCATION',
    'COMPUTER CENTRE',
    'ANDHRA BANK',
    'INNOVATION AND INCUBATION CENTRE',
    'SVU ENGG.CSE/EEE BLOCK',
    'DEPARTMENT OF CHEMICAL ENGINEERING',
    'SRI SRINIVASA SPORTS COMPLEX',
    'S.V.UNIVERSITY GYM',
    'DEPARTMENT OF CIVIL ENGINEERING,SVUCE',
    'SRI VENKATESWARA UNIVERSITY STADIUM TARAKARAMA PAVILION',
    'SV UNIVERSITY MBA DEPARTMENT',
    'SVU HEALTH CENTRE',
    'IGNOU STUDY CENTRE',
    'SV ARTS BASKETBALL COURT',
    'SV QUALITY XEROX',
    'SV ARTS TENNIS COURT',
    'SVU COLLEGE OF SCIENCES',
    'SV ARTS COLLEGE LIBRARY',
    'SVU FISHERY SCIENCE & AQUACULTURE',
    'UNIVERSITY POST OFFICE',
    'SV UNIVERSITY,NATURAL SCIENCES BUILDING',
    'SRI VENKATESWARA UNIVERSITY MAIN ENTRANCE',
    'ELECTRONICS AND COMMUNICATION ENGINEERING BUILDING',
    'SVUCE BOYS HOSTEL OFFICE',
    'SVU 2ND GATE',
    'C-BLOCK PG MENS HOSTEL',
    'SVU 1ST GATE',

];

const resultsBox=document.querySelector(".result-box");
const inputBox=document.getElementById("input-box");
inputBox.onkeyup=function(){
    let result=[];
    let input=inputBox.value;
    if(input.length){
        result=availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultsBox.innerHTML='';
    }
}

function display(result){
    const content=result.map((list)=>{
        return "<li onclick=selectInput(this)>"+list+"</li>";
    });
    resultsBox.innerHTML="<ul>"+content.join('')+"</ul>";
}

function selectInput(list){
    inputBox.value=list.innerHTML;
    resultsBox.innerHTML='';
}

function redirectToGoogleMaps(){
    var location=inputBox.value;
    if(location=='Annamyya Bhavan'||location=='Directorate Of Student Welfare And Cultural Affairs'){
        var googleMaps='https://www.google.com/maps/place/Annamayya+Bhavan,+Directorate+Of+Cultural+Affairs/@13.6285243,79.3987521,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b162eb203cf:0xa7998096b28a20a4!8m2!3d13.6285191!4d79.401327!16s%2Fg%2F11gk3jkd0p?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='Srinivasa Auditorium'){
        var googleMaps='https://www.google.com/maps/place/Srinivasa+Auditorium/@13.6294656,79.3966075,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b3c843bef7b:0x989f777cf2a2bc8a!8m2!3d13.6294604!4d79.3991824!16s%2Fg%2F1v7tjsrb?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='University Library'){
        var googleMaps='https://www.google.com/maps/place/SV+University+Library/@13.6310217,79.3986764,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b3155555555:0x4acb0c97b1c71840!8m2!3d13.6310165!4d79.4012513!16s%2Fg%2F1tf8rj7n?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='Administration Building'||location=='Neelam Sanjiva Reddy Bhavan'||location=='Green Energy Building'){
        var googleMaps='https://www.google.com/maps/place/SV+UNIVERSITY+Administrative+Building/@13.6288551,79.3796559,15.08z/data=!4m10!1m2!2m1!1sadministration+building!3m6!1s0x3a4d4bacdeb8ded9:0xe6aae2965faa06b3!8m2!3d13.628881!4d79.3978307!15sChdhZG1pbmlzdHJhdGlvbiBidWlsZGluZ5IBCnVuaXZlcnNpdHngAQA!16s%2Fg%2F11j2hvvvvm?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='Old MBA Building'){
        var googleMaps='https://www.google.com/maps/place/SV+University+Old+MBA+Building/@13.6270798,79.3969039,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b3ce661342b:0xd5eba97f63a0749d!8m2!3d13.6270746!4d79.3994788!16s%2Fg%2F11fx7v2vq1?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='DEPARTMENT OF DISTANCE EDUCATION'){
        var googleMaps='https://www.google.com/maps/place/Department+of+Distance+Education,+Sri+Venkateswara+University,Tirupathi./@13.631661,79.3957596,17z/data=!4m6!3m5!1s0x3a4d4b239c466b97:0xa8622f774796d6ec!8m2!3d13.6316558!4d79.3983345!16s%2Fg%2F11c58fqsh4?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='COMPUTER CENTRE'){
        var googleMaps='https://www.google.com/maps/place/SVU+computer+centre/@13.6287292,79.3968452,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b34fc79ec23:0x5cbc9c3b213fe7ab!8m2!3d13.628724!4d79.3994201!16s%2Fg%2F11llbc6879?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='ANDHRA BANK'){
        var googleMaps='https://www.google.com/maps/dir//Andhra+Bank,+1032-S.V.University+Campus+Branch,+Sri+Padmavati+Mahila+Visvavidyalayam,+Tirupati,+Andhra+Pradesh+517501/@13.6314891,79.3949325,17z/data=!4m12!1m2!2m1!1sSV+UNIVERSITY+ANDHRA+BANK!4m8!1m0!1m5!1m1!1s0x3a4d4b2359c1d713:0x15bf76a0d68d9f6a!2m2!1d79.3972227!2d13.6293976!3e2?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='INNOVATION AND INCUBATION CENTRE SVU'){
        var googleMaps='https://www.google.com/maps/place/Innovation+and+Incubation+Center+SVU/@13.6315281,79.3970898,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4bd53f6d4b7d:0x51767b2219efeeba!8m2!3d13.6315229!4d79.3996647!16s%2Fg%2F11twb_f5t6?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='SVU ENGG.CSE/EEE BLOCK'){
        var googleMaps='https://www.google.com/maps/place/SVU+Engg.+CSE%2FEEE+block/@13.6280768,79.3925416,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4bcc60c9bdb5:0xae48dce54906d07d!8m2!3d13.6280716!4d79.3951165!16s%2Fg%2F11q4jtnqw7?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps; 
    }
    else if(location=='DEPARTMENT OF CHEMICAL ENGINEERING'){
        var googleMaps='https://www.google.com/maps/place/Department+of+Chemical+Engineering/@13.6268228,79.3930972,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b3b136ceae3:0x723232853bb7034c!8m2!3d13.6268176!4d79.3956721!16s%2Fg%2F11cks50t1v?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='SRI SRINIVASA SPORTS COMPLEX'){
        var googleMaps='https://www.google.com/maps/place/Sri+Srinivasa+Sports+Complex/@13.6293411,79.4037999,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b177ccaa28d:0x439b2ee838225a51!8m2!3d13.6293359!4d79.4063748!16s%2Fg%2F1thd532g?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;  
    }
    else if(location=='S.V.UNIVERSITY GYM'){
        var googleMaps='https://www.google.com/maps/place/S.V.University+Gym/@13.6292942,79.4013262,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b181c1f243d:0xc4b97acf23cdb4c3!8m2!3d13.629289!4d79.4039011!16s%2Fg%2F1264d3dhw?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps; 
    }
    else if(location=='DEPARTMENT OF CIVIL ENGINEERING,SVUCE'){
        var googleMaps='https://www.google.com/maps/place/Department+Of+Civil+Engineering+,SVUCE/@13.627955,79.3948775,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4bbdfcc28545:0x32a3ad499447485e!8m2!3d13.6279498!4d79.3974524!16s%2Fg%2F11mx8kbr1j?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='SRI VENKATESWARA UNIVERSITY STADIUM TARAKARAMA PAVILION'){
        var googleMaps='https://www.google.com/maps/place/Taraka+Rama+stadium+sv+University+ground/@13.6263868,79.4006875,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b55b9053f1f:0x15570e4478ab9d84!8m2!3d13.6263816!4d79.4032624!16s%2Fg%2F11svhxn4v9?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='SV UNIVERSITY MBA DEPARTMENT'){
        var googleMaps='https://www.google.com/maps/place/SV+UNIVERSITY+MBA+DEPARTMENT/@13.6335747,79.3952183,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b23f0fcf567:0xdc9c2690d047fb86!8m2!3d13.6335695!4d79.3977932!16s%2Fg%2F11dyxythkn?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='SVU HEALTH CENTRE'){
        var googleMaps='https://www.google.com/maps/place/SVU+Health+Center/@13.6285691,79.4018062,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b178c86cf3b:0x98a6b1caa38c08c5!8m2!3d13.6285639!4d79.4043811!16s%2Fg%2F1v_0h5mp?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='IGNOU STUDY CENTRE'){
        var googleMaps='https://www.google.com/maps/place/IGNOU+Study+Center+Tirupati/@13.6317549,79.4028772,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b9aa58b7a1d:0x38d503e15090b063!8m2!3d13.6317497!4d79.4054521!16s%2Fg%2F11gzr8v0x7?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps; 
    }
    else if(location=='SV ARTS BASKETBALL COURT'){
        var googleMaps='https://www.google.com/maps/place/SV+Arts+Basketball+Court/@13.6313505,79.4036289,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b7387a44645:0x136beeef0c9527d!8m2!3d13.6313453!4d79.4062038!16s%2Fg%2F11sbywy28z?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps; 
    }
    else if(location=='SV QUALITY XEROX'){
        var googleMaps='https://www.google.com/maps/place/S+V+Quality+Xerox/@13.6285881,79.3988438,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b3d3715962d:0x651fe916c9135ca4!8m2!3d13.6285829!4d79.4014187!16s%2Fg%2F11c718dcrn?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='SV ARTS TENNIS COURT'){
        var googleMaps='https://www.google.com/maps/place/Tennis+Court/@13.6313782,79.4040403,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b6b84990857:0x6b0aa93e43cb7080!8m2!3d13.631373!4d79.4066152!16s%2Fg%2F11s0tpc0p2?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps; 
    }
    else if(location=='SVU COLLEGE OF SCIENCES'){
        var googleMaps='https://www.google.com/maps/place/SVU+College+of+Sciences/@13.6284428,79.3984781,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b232bffa6cf:0x425d899829182fbe!8m2!3d13.6284376!4d79.401053!16s%2Fg%2F11c43yl9jz?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps; 
    }
    else if(location=='SVU ARTS COLLEGE LIBRARY '){
        var googleMaps='https://www.google.com/maps/place/S+V+Arts+College+library/@13.6321729,79.4042126,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b4a8024d865:0x2a4471f2a97c42e3!8m2!3d13.6321677!4d79.4067875!16s%2Fg%2F11h1g6lnyt?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps; 
    }
    else if(location=='SVU FISHERY SCIENCE & AQUACULTURE '){
        var googleMaps='https://www.google.com/maps/place/SVU+Dept.Fishery+Science+%26+Aquaculture/@13.6300958,79.3978812,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b07db43b35f:0x970d6bd03f492e12!8m2!3d13.6300906!4d79.4004561!16s%2Fg%2F11rr747z3p?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps; 
    }
    else if(location=='UNIVERSITY POST OFFICE'){
        var googleMaps='https://www.google.com/maps/place/University+Post+Office/@13.6354283,79.4038565,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b1ecfc4ddf1:0xbdf1bc6e4706b2da!8m2!3d13.6354231!4d79.4064314!16s%2Fg%2F11gbjpzjsy?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='SV UNIVERSITY,NATURAL SCIENCES BUILDING'){
        var googleMaps='https://www.google.com/maps/place/S.V.+University,+Natural+Sciences+Building/@13.6295067,79.3981558,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4bc70d584aef:0x37752d1c4b074b1!8m2!3d13.6295015!4d79.4007307!16s%2Fg%2F11fnrs9btq?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='SRI VENKATESWARA UNIVERSITY MAIN ENTRANCE'){
        var googleMaps='https://www.google.com/maps/place/Sri+Venkateswara+University+main+entrance/@13.6263201,79.3959384,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b3c8c9b2677:0xefecd305f2aafb11!8m2!3d13.6263149!4d79.3985133!16s%2Fg%2F11f_j0brph?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='ELECTRONICS AND COMMUNICATION ENGINEERING BULDING'){
        var googleMaps='https://www.google.com/maps/place/Electronics+and+Communication+Engineering+Building/@13.6272576,79.3937441,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b3b428a6cef:0xc6bd5c83ddf89605!8m2!3d13.6272524!4d79.396319!16s%2Fg%2F11c2pl_fpc?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
    else if(location=='SVUCE BOYS HOSTEL OFFICE'){
        var googleMaps='https://www.google.com/maps/place/SVUCE+Boys+Hostel+Office/@13.6278495,79.3930678,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4bcdd8b054cf:0x30e3d7e32a99ce87!8m2!3d13.6278443!4d79.3956427!16s%2Fg%2F11vj9n4mxn?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps;
    }
 
    else if(location=='C-BLOCK PG MENS HOSTEL'){
        var googleMaps='https://www.google.com/maps/place/C-block,+P.G+mens+hostel+,Svuniversity/@13.6302401,79.4003351,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b30d816d647:0xe6b3c85295f5425!8m2!3d13.6302349!4d79.40291!16s%2Fg%2F11s5n4g6pj?entry=ttu'+encodeURIComponent(location);
        window.location.href=googleMaps; 
    }
    else if(location=='SVU 1ST GATE'){
         var googleMaps='https://www.google.com/maps/place/SVU+1st+Gate/@13.6277774,79.4015753,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b1bd4c30f8d:0x361a264cdb3adcc9!8m2!3d13.6277722!4d79.4041502!16s%2Fg%2F11fjf6kyzv?entry=ttu'+encodeURIComponent(location);
         window.location.href=googleMaps;
    }

    else{
        document.write('will find out');
    }
   
    
}