import pandas as pd

original_df = pd.read_csv("public/tables/witch_trials.csv")
new_df = pd.read_csv("public/tables/witch_trials_new.csv")

print(original_df.head())
print(new_df.head())

new_df = pd.read_csv("public/tables/witch_trials_new.csv", sep=";")

# Apply transformation rules

# 1. If "place" is empty, fill with "area"
new_df['place'] = new_df['place'].fillna(new_df['area'])

# 2. If "date" is empty, use "start_date"
new_df['date'] = new_df['date'].fillna(new_df['start_date'])

# 3. Move value from "trials" to "amount"
new_df['amount'] = new_df['trials']

# Add any missing columns from original_df with default NaNs
for col in original_df.columns:
    if col not in new_df.columns:
        new_df[col] = pd.NA

new_df = new_df[original_df.columns]


combined_df = pd.concat([original_df, new_df], ignore_index=True)

combined_df.sample(5)

combined_df.to_csv("public/tables/witch_trials_combined.csv", index=False)