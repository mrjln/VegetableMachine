import React from 'react';
import Machine from './components/Machine/Machine'
import Layout from './containers/Layout/Layout'



function App() {
  return (
    <div>
        <Layout headerTitle={"Vegetable Machine"}>
          <Machine/>
        </Layout>
    </div>
  );
}

export default App;
