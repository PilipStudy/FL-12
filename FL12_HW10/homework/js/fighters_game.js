function Fighter(Name, Damage, Hp, Strength, Agility) {
    let name = Name,
    damage = Damage,
    hp = Hp,
    strength = Strength,
    agility = Agility;
    let wins = 0,
    losses = 0;

    
    this.getName = function(){
        return name;
    }
    this.getDamage = function(){
        return damage;
    }
    this.getStrength = function(){
        return strength;
    }
    this.getAgility = function(){
        return agility;
    }
    this.getHealth = function(){
        return hp;
    }
    this.attack = function(){
        if( Math.floor(Math.random()*2) === 1 ){
            return arguments[0].getHealth() - damage;
        }
    }
    this.logCombatHistory = function(){
        console.log(name, wins, losses)
    }
    this.heal = function(){
        return arguments[0] + this.getHealth();
    }

} 
function batlle (fighter1, fighter2){
   
    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0){
      fighter2.attack(fighter1)
    }
    if (fighter1.getHealth() <= 0 && fighter2.getHealth() <= 0){
      return fighter1;
    } else if (fighter1.health <= 0){
      return fighter2.name;
    } else{
      return fighter1.name;
    }
}
