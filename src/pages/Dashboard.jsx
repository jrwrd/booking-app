import DashboardCard from "../components/Dashboard/DashboardCard/DashboardCard"

function Dashboard() {
  return (
    <>
        <div className="w-3/5 mx-auto my-14">
            <div className="flex flex-row flex-wrap gap-0">
                <div className="basis-1/2"><DashboardCard title="Appointments" subtitle="Appointments scheduled by customers for the current week"/></div>
                <div className="basis-1/2"><DashboardCard title="Sales generated" subtitle="for the past 30 days"/></div>
                <div className="basis-1/2"><DashboardCard title="Performance" subtitle="Weekly/Monthly performance targets"/></div>
                <div className="basis-1/2"><DashboardCard title="Top services" subtitle="Most popular services for the past week/month"/></div>
            </div>
        </div>
    </>
  )
}
export default Dashboard