'use client';
import { Typography } from '@mui/material';
import PageContainer from '../../(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '../../(DashboardLayout)/components/shared/DashboardCard';
import RecentTransactions from '../components/dashboard/RecentTransactions';

const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
   <div className=' grid grid-cols-2'>
   <div className=' border h-60 w-60 rounded-full bg-white'>
   <div className=' justify-center text-center relative top-24'>
   <p>Level 1</p>
   <p>Hyip Member</p>
   </div>
   </div>
      <DashboardCard className="w-44" width={50}>
      
      </DashboardCard>
   </div>
      <div className='grid grid-cols-4 gap-2 my-32'>
         <div className=' space-y-2'>
         <DashboardCard title="Sample Page" className="my-5">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
      <DashboardCard title="Sample Page" className="my-5">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
      <DashboardCard title="Sample Page" className="my-5">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
         </div>
         <div className=' space-y-2'>
         <DashboardCard title="Sample Page" className="my-5">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
      <DashboardCard title="Sample Page" className="my-5">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
      <DashboardCard title="Sample Page" className="my-5">
        <Typography>This is a sample page</Typography>
      </DashboardCard>

         </div>
         <div className=' space-y-2'>
         <DashboardCard title="Sample Page" className="my-5">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
      <DashboardCard title="Sample Page" className="my-5">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
      <DashboardCard title="Sample Page" className="my-5">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
         </div>
         <div className=' space-y-2'>
         <DashboardCard title="Sample Page" className="my-5">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
      <DashboardCard title="Sample Page" className="my-5">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
      <DashboardCard title="Sample Page" className="my-5">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
         </div>
      </div>
      <RecentTransactions/>
    </PageContainer>
  );
};

export default SamplePage;

