# -*- coding: utf-8 -*-
"""Welcome To Colaboratory

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/notebooks/intro.ipynb
"""

import pandas as pd

# Load data
receptionist_df = pd.read_csv('receptionist_data.csv')
doctor_df = pd.read_csv('doctor_data.csv')

# Concatenate dataframes along the columns (axis=1)
merged_data = pd.concat([doctor_df, receptionist_df], axis=1)

# Preprocess merged_data if needed (e.g., encoding categorical variables)
# ...

# Prepare features (X) and target (y)
X = merged_data[['Symptoms', 'Disease']]
y = merged_data['Medicine Prescription']

# Print a few rows of the merged dataset
print(merged_data.head())

# Print a few rows of features (X) and target (y)
print(X.head())
print(y.head())

from sklearn.preprocessing import OneHotEncoder

# One-hot encode categorical features
encoder = OneHotEncoder(sparse=False, drop='first')
X_encoded = encoder.fit_transform(X)

unique_values = merged_data['Medicine Prescription'].unique()
print(unique_values)

merged_data = merged_data[merged_data['Medicine Prescription'].apply(lambda x: str(x).isnumeric())]

merged_data['Medicine Prescription'] = pd.to_numeric(merged_data['Medicine Prescription'], errors='coerce')

merged_data = merged_data.dropna(subset=['Medicine Prescription'])

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Generate fake data
np.random.seed(42)
n_samples = 100

data = {
    'Symptoms': np.random.choice(['Fever', 'Cough', 'Headache'], n_samples),
    'Disease': np.random.choice(['Flu', 'Cold', 'Migraine'], n_samples),
    'Medicine Prescription': np.random.randint(10, 100, n_samples)  # Fake medicine quantity
}

# Create a DataFrame
df = pd.DataFrame(data)

# Separate features (X) and target (y)
X = df[['Symptoms', 'Disease']]
y = df['Medicine Prescription']

# One-hot encode categorical features
encoder = OneHotEncoder(sparse=False, drop='first')
X_encoded = encoder.fit_transform(X)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_encoded, y, test_size=0.2, random_state=42)

# Initialize and train the Linear Regression model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions on the test data
y_pred = model.predict(X_test)

# Print the predicted values and the actual values
print("Predicted:", y_pred)
print("Actual:", y_test)

import matplotlib.pyplot as plt

# Create a scatter plot
plt.scatter(y_test, y_pred)
plt.xlabel("Actual Medicine Prescription")
plt.ylabel("Predicted Medicine Prescription")
plt.title("Actual vs. Predicted Medicine Prescription")
plt.show()
