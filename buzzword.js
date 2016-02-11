var quotes_1 = [
    "Ill-defined ",
    "Acculturation ",
    "Careerpathing ",
    "Talent-focused ",
    "Data-driven ",
    "Employee lifecycle ",
    "Values driven ",
    "Value-add ",
    "Actionable ",
    "Amplified ",
    "Rock star ",
    "Guru ",
    "Ninja ",
    "Jedi ",
    "Strategic Business Partner ",
    "Planful ",
    "Parsable ",
    "Machine learnable ",
    "Talent Management ",
    "Work/life balance ",
    "Learning Organization ",
    "Emotional intelligence ",
    "Offboarding ",
    "Engagement ",
    "Force reduction ",
    "Rightsizing ",
    "Smart-sizing ",
    "Redeployment ",
    "Human Capital ",
    "Resilience training ",
    "Diversity ",
    "Genetic screening ",
    "Award-winning ",
    "Awesome co-worker ",
    "Real-time ",
    "Data-heavy ",
    "Complex ",
    "Passionate ",
    "Territorial ",
    "Consumer-first ",
    "On site ",
    "Obsessive ",
    "Agile ",
    "Profitable ",
    "Growth hack the ",
    "Monetize the ",
    "Circle back on ",
    "Talent-driven ",
    "Sacrifice the ",
    "Charismatic ",
    "Enticing ",
    "Owner/CEO ",
    "Social-mobile-local ",
    "Marginally interested ",
    "Open kimono ",
    "Blue-sky thinking ",
    "Heavily funded ",
    "Mid-sized ",
    "Income inequality ",
    "App-based ",
    "Anti-Motivational ",
    "Fail forward ",
    "Distressed ",
    "Let's workshop this ",
    "Amplifying the ",
    "Ladder up ",
    "Disrupting ",
    "Swat team ",
    "Acluistic ",
    "Holacratic ",
    "Let’s not boil the ocean with ",
    "All hands ",
    "20x ",
    "C-suite ",
    "Faith-based ",
    "Disrupt the ",
    "360-degree ",
    "Tribal "
];

var quotes_2 = [
    "bumping",
    "broadbanding",
    "candidate experience",
    "momtrepreneur",
    "radical candor",
    "transparency",
    "office fridge",
    "amplification",
    "paranoia",
    "psychopathy",
    "intrapreneur",
    "excitement",
    "curation",
    "unprofessionalism",
    "core competency",
    "iconicity",
    "iteration",
    "laddering up",
    "funnel",
    "so we don’t boil the ocean",
    "happiness",
    "emojis",
    "goes agile",
    "ecosystem",
    "client love",
    "granularity",
    "unicorn",
    "sharing economy",
    "outreach",
    "reach around",
    "will replace the resume",
    "ways to socialize this",
    "leverage",
    "synergy",
    "game-changer",
    "edge-case",
    "scalability",
    "equity",
    "virtualisation-layer",
    "potential IPO",
    "balanced scorecard",
    "core competencies",
    "recruiting",
    "meta resume",
    "heads-up",
    "analytics",
    "package",
    "performance metrics",
    "agnostic",
    "impact",
    "cover letter",
    "call to action",
    "thinking skills",
    "marketplace",
    "profiles on LinkedIn",
    "capital",
    "cubicle",
    "talent metrics",
    "benefits",
    "self-starter",
    "industry",
    "roleplay",
    "hot-desking",
    "pinball machines",
    "referrals",
    "green light",
    "free pizza Fridays!",
    "foosball",
    "engagement metrics",
    "nap pods",
    "bean bag",
    "trajectory",
    "performance reviews",
    "perks",
    "toxic work culture",
    "cult",
    "wellness",
    "serenity room",
    "webinar",
    "aerial yoga",
    "big data",
    "holacracy",
    "moonshot",
    "tyranny",
    "anchor company"
];

var bg_colors = ["#390b56", "#6dc5a2", "#e03243", "#4463ed", "#ff984f", "#a31054", "#9e9d14"];

var count = 0;

var previousRandomQuote = quotes_1[0];

$( document ).ready(function() {
  hrBuzzwordGame();
  createTweet();

  $(window).resize(function(){
    $(".container").height($(window).height());
  });
});


var uniqueRandoms = [];
function makeUniqueRandom(numRandoms) {
  // refill the array if needed
  if (!uniqueRandoms.length) {
    for (var i = 0; i < numRandoms; i++) {
      uniqueRandoms.push(i);
    }
  }
  var index = Math.floor(Math.random() * uniqueRandoms.length);
  var val = uniqueRandoms[index];
  // now remove that value from the array
  uniqueRandoms.splice(index, 1);
  return val;
}


function hrBuzzwordGame() {
  randomNumber = Math.floor((Math.random() * bg_colors.length)),
  color = bg_colors[randomNumber];
  $("body").css('background-color', color);
  $(".buzzword-btn").css('color', color);

  //quotes
  var q_1 = quotes_1[ (makeUniqueRandom(quotes_1.length)) ];
  var q_2 = quotes_2[ (makeUniqueRandom(quotes_2.length)) ];
  // var q_1 = quotes_1[ Math.floor( Math.random() * quotes_1.length ) ];
  // var q_2 = quotes_2[ Math.floor( Math.random() * quotes_2.length ) ];
  if(q_1 == undefined){
    //repeat
    var q_1 = quotes_1[ Math.floor( Math.random() * quotes_1.length ) - 1];
  }
  document.getElementById("quotes").innerHTML = q_1 + q_2;
  console.log("q_1: "+q_1 +", q2: "+q_2 );
  console.log("q_1: "+ makeUniqueRandom(quotes_1.length));
}

$('#btn').click(function(e) {
  hrBuzzwordGame();
  count ++;
  if ( (count == 12) || (count == 22) || (count == 30) ) {
    displayPopup(e, count);
    $(".container").addClass('blur-filter');
  }
});


$('#share-btn').click(function(e) {
  showSocialBtns();
});

function showSocialBtns() {
  if ($('.social-icons-holder-2').hasClass('active')){
    $('.social-icons-holder-2').removeClass('active');
  } else {
    $('.social-icons-holder-2').addClass('active');
  }
}

$(document).on("click", function(e) {
  if ($(e.target).is("#share-btn") === false) {
    $('.social-icons-holder-2').removeClass('active');
  }
});


//open popup
function displayPopup(e, count) {
  e.stopPropagation();
  if (count == 12) {
      $('.popup.first').removeClass('popup-mobile').css('top', newHeight).toggle();
  } else if (count == 22) {
      $('.popup.second').removeClass('popup-mobile').css('top', newHeight).toggle();
  } else if (count == 30) {
      $('.popup.third').removeClass('popup-mobile').css('top', newHeight).toggle();
  }
}

var scrollTop = '';
var newHeight = '100';

if(jQuery(window).width() < 767) {
  var newHeight = '0';
}

// $(window).bind('scroll', function() {
//   scrollTop = $( window ).scrollTop();
//   newHeight = scrollTop + 100;
// });
$('html').click(function() {
 $('.popup').hide();
 $(".container").removeClass('blur-filter ');
});

$('.pop-up-close').click(function(e){
  $('.popup').hide();
    $(".container").removeClass('blur-filter ');
});

$('.popup').click(function(e){
  e.stopPropagation();
});

$('#tweet-this-post').click(function() {
  createTweet();
});

//twitter
function createTweet() {
  var getPostTitle = document.getElementById( "quotes" ).innerHTML;
  linkElement = document.getElementById( "tweet-this-post" );
  getPostLink = window.location.href;

  linkElement.setAttribute( "href", getPostLink );
  $( linkElement ).on( "click", function( event ){
  var getPostTitle = document.getElementById( "quotes" ).innerHTML;
      event.preventDefault();
      var tweetedLink = this.getAttribute( "href" );
      var x = $(window).width()/2 - 600/2;
    var y = $(window).height()/2 - 600/2;
    window.open( 'http://twitter.com/intent/tweet?url=' + tweetedLink + '&text="' + getPostTitle + '" will rock your workplace! %23HRbuzz %23triumphofjargon http://bit.ly/20NQPVm', 'twitterwindow', 'height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0, left='+x+',top='+y );
  });
}

function openSocialWindow(socialUrl) {
  var x = $(window).width()/2 - 600/2;
  var y = $(window).height()/2 - 600/2;
  window.open(socialUrl.href, 'sharepopup','height=600,width=600,left='+x+',top='+y);
}


