nutrition-ai serves as a wrapper for a google gemini pro vision model designed to analyze food-related images. This package provides detailed nutritional information about the presented food items, including caloric content, nutritional value, and personalized dietary recommendations.

## Installation

Install with npm

```bash
  npm i nutrition-ai
```


## Usage

```bash
import { generateAnswer } from "nutrition-ai";

const answer = await generateAnswer({ fileBase64, fileMimeType, googleKey });
```

## Features

- **Food Item Analysis:** Obtain detailed information about each identified food item, including caloric content and health benefits.
- **Total Calories Calculation:** Evaluate the sum of calories for all identified items to provide a comprehensive view of the meal's energy content.
- **Overall Nutritional Value Assessment:** Analyze the meal's nutritional balance and healthfulness, offering personalized dietary advice.
- **Nutritional Composition Breakdown:** Break down the nutritional composition, emphasizing the percentages for macronutrients.
- **Dietary Recommendations:** Provide actionable advice for enjoying the meal in a healthy manner, including portion sizes and alternative ingredients.

## API Reference

- **generateAnswer():**
    - Parameters: 
        - fileBase64 (string) : file content as base64.
        - fileMimeType (string): image/jpeg / image/png
        - googleKey (string) : google AI key (grab it from https://makersuite.google.com)
        - model (string) : model is optional. By default, it will use gemini-pro-vision model.
    - Returns:
        - text: The text contains generated answer from model. 

## Authors

- [@dhavalcode](https://www.github.com/dhavalcode)