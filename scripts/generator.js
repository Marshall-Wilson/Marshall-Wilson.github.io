
const adjective = ["Abundant", "Sweet", "Sunny", "Verdant", "Good", "Kind", 
    "Old", "New", "Peaceful", "Stinky", "Running", "Sentient", "Blessed"];
const first_word = [ "Acorn", "River", "Forest", "Beauty", "Green", 
    "Sylvan", "Nature", "Natural", "Freedom", "Heart", "Bliss", 
    "Back", "Barred", "Bear", "Deer", "Holly", "Cedar", "New", "Sunshine",  
    "Maple", "Sweet", "Hill", "Ridge", "Forest", "Mountain", "Creek", "Brook", 
    "Ridge", "Spring", "Great", "Good", "Kind", "Meadow", "Glen", "Old"];
const second_word = ["Ridge", "Field", "Horn", "Forest", "Mountain", "Meadow", 
    "Run", "Hawk", "Glen", "Road", "Lane", "Creek", "Hill", "Brook", "Bend", 
    "Roots", "View", "Pond", "Sunrise"];
const farm_type = ["Organic Farm", "Farm", "Dairy", "Sugar Shack", "Farms",
    "Farm", "Farm", "Farm", "Organic Farm"];


const generate_farm_name = () => {
    let farm_name = "";
    if (Math.random() > 0.6) {
        farm_name = add_word(farm_name, adjective);
        if (Math.random() > 0.6) {
            farm_name = add_word(farm_name, first_word);
        }
    } else {
        farm_name = add_word(farm_name, first_word);
    }

    farm_name = add_word(farm_name, second_word);
    farm_name = add_word(farm_name, farm_type);
    document.getElementById("farm_name").innerHTML = farm_name;
    document.getElementById("farm").classList.add("displayed");
}

const add_word = (farm_name, word_source_a) => {
    let i = Math.floor(Math.random() * word_source_a.length);
    if (farm_name.length > 0) {
        farm_name += " ";
    }
    return farm_name + word_source_a[i];
}
