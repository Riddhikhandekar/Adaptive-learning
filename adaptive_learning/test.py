# test.py

# Importing Necessary Libraries

import pandas as pd
#Required for numerical functions
import numpy as np
from scipy import stats
from datetime import datetime
from sklearn import preprocessing
from sklearn.model_selection import KFold
from sklearn.linear_model import LinearRegression
#For plotting the graph
import matplotlib.pyplot as plt
# %matplotlib inline

# Reading Data
df = pd.read_csv('building1retail.csv', index_col=[0],
date_parser=lambda x: datetime.strptime(x, "%m/%d/%Y %H:%M"))
df.head()

df.plot(figsize=(22,6))

df.isnull().values.any()

df.hist()

std_dev = 3
df = df[(np.abs(stats.zscore(df)) < float(std_dev)).all(axis=1)]
df.plot(figsize=(22, 6))

plt.scatter(df['OAT (F)'], df['Power (kW)'])

X = pd.DataFrame(df['OAT (F)'])
y = pd.DataFrame(df['Power (kW)'])
model = LinearRegression()
scores = []
kfold = KFold(n_splits=3, shuffle=True, random_state=42)
for i, (train, test) in enumerate(kfold.split(X, y)):
    model.fit(X.iloc[train,:], y.iloc[train,:])
    score = model.score(X.iloc[test,:], y.iloc[test,:])
    scores.append(score)
print(scores)

model = LinearRegression()
scores = []
kfold = KFold(n_splits=3, shuffle=True, random_state=42)
for i, (train, test) in enumerate(kfold.split(X, y)):
   model.fit(X.iloc[train,:], y.iloc[train,:])
   scores.append(model.score(X.iloc[test,:], y.iloc[test,:]))
print(scores)

# Plotting bar graph
plt.bar(range(len(scores)), scores)
plt.xlabel('Fold')
plt.ylabel('R-squared Score')
plt.title('Cross-Validation Scores')
plt.show() 






