new Vue({
	el: "#app",
	data: {
		human: 100,
		monster: 100,
		att1: 0,
		att2: 0,
		game: true,
		events: [],
		hvictory: false,
		mvictory: false,
		mcolor: "green",
		hcolor: "green"
	},
	methods: {
		sattack: function(){
			this.att1 = -Math.floor(Math.random() * 20);
			this.att2 = -Math.floor(Math.random() * 25);
			this.monster += this.att1;
			this.human += this.att2;
			this.events.unshift("You used a special attack of power "+ this.att1)
			this.events.unshfit("Monster used attacked you with power "+ this.att2)
			if(this.human<=0){
				this.mvictory=true
				this.game=!this.game
			}
			if(this.monster<=0){
				this.hvictory=true
				this.game=!this.game
			}
			if(this.monster<=20){
				this.mcolor="red";
			}else{
				this.mcolor="green";
			}
			if(this.human<=20){
				this.hcolor="red";
			}else{
				this.hcolor="green";
			}
		},
		attack: function(){
			this.att1 = -Math.floor(Math.random() * 10);
			this.att2 = -Math.floor(Math.random() * 15);
			this.monster += this.att1;
			this.human += this.att2;
			this.events.unshift("You used a normal attack of power "+ this.att1)
			this.events.unshift("Monster used attacked you with power "+ this.att2)
			if(this.human<=0){
				this.mvictory=true
				this.game=!this.game
			}
			if(this.monster<=0){
				this.hvictory=true
				this.game=!this.game
			}
			if(this.monster<=20){
				this.mcolor="red";
			}else{
				this.mcolor="green";
			}
			if(this.human<=20){
				this.hcolor="red";
			}else{
				this.hcolor="green";
			}
		},
		heal: function(){
			this.att1 = +Math.floor(Math.random() * 12);
			this.att2 = -Math.floor(Math.random() * 15);
			this.human += this.att1;
			this.human += this.att2;
			this.events.unshift("You healed yourself by power "+ this.att1)
			this.events.unshift("Monster used attacked you with power "+ this.att2)
			if(this.human>100){
				this.human=100;
			}
			if(this.human<=0){
				this.mvictory=true
				this.game=!this.game
			}
			if(this.monster<=0){
				this.hvictory=true
				this.game=!this.game
			}
			if(this.monster<=20){
				this.mcolor="red";
			}else{
				this.mcolor="green";
			}
			if(this.human<=20){
				this.hcolor="red";
			}else{
				this.hcolor="green";
			}
		},
		restart: function(){
			this.game=!this.game
			this.events=[];
			this.human=100;
			this.monster=100;;
			this.hvictory= false;
			this.mvictory=false;
			this.mcolor="green";
			this.hcolor="green";
		},
	}

});
