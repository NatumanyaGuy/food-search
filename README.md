# Muriro Food Search API (beta) -v-0.8

This API is for nutritionists, dieteticians and developers alike, designed to provide quick and easy access to a comprehensive database of East African dishes adapted from sources like; A Food Composition Table for Central and Eastern Uganda (_Hotz & Lubowa et al._).
With this API, users can search for different foods and receive detailed information on nutritional content.

## Acknowledgements

- [Muriro](https://muriro.com)
- [Nova Dietetics & Wellness Clinic](https://novadietetics.com)
- [Harvest Plus](https://www.harvestplus.org/publications/a-food-composition-table-for-central-and-eastern-uganda/)

## Authors

- [@NatumanyaGuy](https://github.com/NatumanyaGuy)

## What we're hoping to add

- Search in Other Languages, other than English
- Filter by Category
- Add Processed foods
- Images....🤔

## Usage/Examples

- Use `/s/{query}` to search by a word query
- Use `/f/{id}` to search for food by ID

TODO: Update API URL

```javascript
async function logFood() {
  const response = await fetch("https://kyakulya.onrender.com/s/bananas");
  const jsonData = await response.json();
  console.log(jsonData);
}

//Response
/*
[{"food_code":"1371","food_description":"CHAPATI,FRIED","food_state":"Fried","food_state_code":"4","fct_source":"USDA-21","fct_source_code":"18413","fct_source_descr":"Based on USDA #18413 Bread,pita,white,unenriched; carotenoids assumed = 0 based on Vitamin A RAE = 0","water_source_descr":"","retention_source":"","retention_source_code":"","retention_source_descr":"","food_group":"GRAINS AND GRAIN PRODUCTS","food_group_code":"2","water_g":"32.1","dry_matter_g":"67.9","energy_kcal":"275","protein_g":"9.1","lipid_total_g":"1.2","carbohydrate_g":"55.7","fiber_g":"2","calcium_mg":"86","iron_mg":"1.4","zinc_mg":"0.8","vit_c_mg":"0","thiamin_mg":"0.267","riboflavin_mg":"0.097","niacin_mg":"2.142","vit_b6_mg":"0.034","folate_total_mcg":"24","folic_acid_mcg":"0","folate_food_mcg":"24","folate_dfe_mcg":"24","vit_b12_mcg":"0","vit_a_iu":"0","vit_a_rae_mcg":"0","retinol_mcg":"0","alpha_carot_mcg":"0","beta_carot_mcg":"0","beta_crypt_mcg":"0"}]
*/
```

## Support

For support, email guynatumanya@gmail.com or checkout our [webiste](https://muriro.com).
