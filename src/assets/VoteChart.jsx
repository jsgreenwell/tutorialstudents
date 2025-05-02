import { Bar } from "react-chartjs-2"

export const VoteChart = ({ voteData }) => {
    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
            <Bar
                data={voteData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Current Vote Tallies"
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    )
}