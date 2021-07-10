addLevel([
  '!^^^^^^&',
    '!^^^^^^&',
      '!^^^^^^&',
  ,'!      &'         
  ,'!      &'  ,
  '!      &'  ,
  '!       &'  ,
  '!      &' ,
   '!      &'  , '!      &'  , '!      &'   
],{width:30,height:22 ,
'^':[sprite('space-invader'),
scale(0.5)] ,
'!':[sprite('wall'),
'left-wall']
,  '&':[sprite('wall'),'right-wall']
})

layers([
    "bg",
    "obj",
    "ui",
], "obj");
//player opject 
const player =add([
  [sprite('space-ship'),
  pos(width() /3 ,
  height()-30 ), 
 origin('center')]
])
const moveSpeed=200
keyDown("left", () => {
  //decrese move speed make opject go to left
    player.move(-moveSpeed,0);
});
keyDown("right", () => {
    player.move(moveSpeed,0);
});
const score =add([text('0')
,pos(50,50),
layer('ui'),{value:0},scale(3)

])
const timeLeft=15;
const timer=add([text('15'),
pos(90,50),
layer('ui'),
{
  time:timeLeft
}

])
//countdown
timer.action(()=>{

  timer.time-=dt();
  timer.text=timer.time.toFixed(2);
  if(timer.time<=0){
    go('lose',score.value)
  }
})