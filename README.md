# Rocket Pool Scorecard

This is a scorecard tracking the progress of Rocket Pool towards decentralization. The scorecard is currently hosted at [https://rocketpool-scorecard.vercel.app/](https://rocketpool-scorecard.vercel.app/).

## Getting Started

To get started with the scorecard, follow these steps:

1. Clone the repository:

    ```shell
    git clone https://github.com/Anthias-Labs/RocketPool-Scorecard.git
    ```

2. Install the dependencies:

    ```shell
    npm install
    ```

3. Start the application:

    ```shell
    npm run dev
    ```
    

4. Open your browser and navigate to `http://localhost:3000` to access the scorecard.

## Editing Entries

To edit the entries in the scorecard, you can modify the `tableInfo.json` file located in the `assets` folder. This file contains the data for the scorecard table, including the activity names and scores.

The `tableInfo.json` file follows the following format:

`attribute`: The attribute of Rocket Pool to be scored.

`category`: The category of the attribute (e.g. Validator Set or Governance).

`membersAtRisk`: Those who would be affected by a change in the attribute.

`assessment`: One of the following: `GOOD`, `INPUT NEEDED`, `OKAY`, `NEEDS IMPROVEMENT`. This is the current assessment of the attribute.

`comments`: Any comments about the attribute, links should be in this format: `[link text](link url)`.

### Example Entry:

```json
{
  "attribute": "Delegation is enabled in onchain Rocket Pool governance",
  "category": "Governance",
  "membersAtRisk": "None",
  "assessment": "GOOD",
  "comments": "Read more at this [link](https://docs.rocketpool.net/guides/)"
},
```

## Adding New Entries

To add a new entry to the scorecard, you can add a new entry to the `tableInfo.json` file located in the `assets` folder. This file contains the data for the scorecard table, including the activity names and scores. The new entry should follow the format described above.

## Contributing

If you would like to contribute to the scorecard in any way, please feel free to open an issue or a pull request. We welcome any and all contributions!