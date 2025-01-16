import pandas as pd

# Read the original file with the correct delimiter
df = pd.read_csv('src/tables/witch_trials.csv', delimiter=';')

# Save the DataFrame to a new CSV file with commas as the delimiter
df.to_csv('src/tables/witch_trials.csv', index=False)
