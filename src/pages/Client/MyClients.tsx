
import PieChart from '../../components/Charts/PieChart'
import StoredVehicle from '../../components/Charts/StoredVehicle'
import DefaultLayout from '../../layout/DefaultLayout'
import DataTable from './components/DataTable'
import TableRowww from './components/TableRow'
import TierForm from './components/TierForm'

const MyClients = () => {
  return (
    <>
     <DefaultLayout>
    <div className=''>

    <div className='dark:bg-lightBlue'>

<TierForm/> 

</div>
<div>
<DataTable/>
</div>
<div>
  <TableRowww/>
</div>


    </div>
    <div className='md:flex mt-16  gap-10 '>
   <div className='dark:bg-darkBlue md:w-1/2 rounded-[25px] '>

   <PieChart />
   </div>
   <div className='dark:bg-darkBlue md:w-1/2 rounded-[25px] '>
   <StoredVehicle/>
   </div>

    </div>
    </DefaultLayout>
   
    </>
  )
}

export default MyClients