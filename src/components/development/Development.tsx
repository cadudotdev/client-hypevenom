import DnsIcon from '@mui/icons-material/Dns';

export function Development() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#4C5958',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <DnsIcon
          style={{ position: 'relative', marginRight: '5px', bottom: '2px' }}
        />
        <h1 style={{ fontSize: '20px', fontWeight: '500' }}>
          Site em desenvolvimento...
        </h1>
      </div>
    </div>
  );
}
