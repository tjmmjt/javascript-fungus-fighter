// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

// ! State
let attackPoints = 100;
let fungusHP = 100;
// attacks
let arcaneScepter = {
  apCost: 12,
  hpDamage: 14,
};
let entangle = {
  apCost: 23,
  hpDamage: 9,
};
let dragonBlade = {
  apCost: 38,
  hpDamage: 47,
};
let starFire = {
  apCost: 33,
  hpDamage: 25,
};

function onReady() {
  console.log("Ready to go!");

  // Make sure you check the index.html file!
  // There are lots of buttons and things ready for you to hook into here!

  // 🧠 Remember
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM
}

// ! Handle
function attacksHandler(attack) {
    // attacks reduce attackPoints and fungusHP
  attackPoints -= attack.apCost
  fungusHP -= attack.hpDamage
  console.log(attackPoints);
  console.log(fungusHP);
  
  checkAP()
  checkIfDead()
  render()
}


// ! Render
function render() {
    // AP
    let apText = document.getElementsByClassName('ap-text')[0]
    apText.innerHTML = `${attackPoints} AP`
    // console.log("AP Text:", apText)
    
    // Fungus HP
    let hpText = document.getElementsByClassName('hp-text')[0]
    hpText.innerHTML = `${fungusHP} HP`
    // console.log("HP Text:", hpText)

    // AP Meter
    let apMeter = document.getElementById('ap-meter')
    apMeter.value = attackPoints
    console.log("AP Meter:", apMeter.value);

     // HP Meter
     let hpMeter = document.getElementById('hp-meter')
     hpMeter.value = fungusHP
     console.log("HP Meter:", hpMeter.value);
}

function checkIfDead(){
    if(fungusHP < 0){
        fungusHP = 0
        let deadClass = document.getElementsByClassName("freaky-fungus walk")[0]
        // console.log(deadClass);
        deadClass.classList = "freaky-fungus dead"
        // console.log(deadClass);
    }
}

function checkAP(){
    if(attackPoints < 0){
        attackPoints = 0
        let jumpClass = document.getElementsByClassName("freaky-fungus walk")[0]
        jumpClass.classList= "freaky-fungus jump"

        let disabledArcaneBtn = document.getElementsByClassName("attack-btn arcane-scepter")[0]
        // console.log('disabled button:', disabledArcaneBtn);
        disabledArcaneBtn.disabled = true
        
        let disabledEntangleBtn = document.getElementsByClassName("attack-btn entangle")[0]
        // console.log('disabled button:', disabledEntangleBtn);
        disabledEntangleBtn.disabled = true

        let disabledDragonBtn = document.getElementsByClassName("attack-btn dragon-blade")[0]
        // console.log('disabled button:', disabledDragonBtn);
        disabledDragonBtn.disabled = true

        let disabledStarBtn = document.getElementsByClassName("attack-btn star-fire")[0]
        // console.log('disabled button:', disabledStarBtn);
        disabledStarBtn.disabled = true
    }
}


onReady();
