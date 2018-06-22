import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import SpongeBobCard from "./components/SpongeBobCard";
// import SquidwardCard from "./components/SquidwardCard";
// import MrKrabsCard from "./components/MrKrabsCard";
import friends from "./friends.json";
import FriendCard from "./components/FriendCard/FriendCard";


// orig
// const App = () => (
//   <Wrapper>
//     <Title>Friends List</Title>
//     <SpongeBobCard />
//     <MrKrabsCard />
//     <SquidwardCard />
//   </Wrapper>
// );

// solution
// const App = () => (
//   <Wrapper>
//     <Title>Friends List</Title>
//     <FriendCard 
//       name={friends[0].name} 
//       image={friends[0].image} 
//       occupation={friends[0].occupation} 
//       location={friends[0].occupation}
//     />
//     <FriendCard 
//       name={friends[1].name} 
//       image={friends[1].image} 
//       occupation={friends[1].occupation} 
//       location={friends[1].occupation}
//     />
//     <FriendCard 
//       name={friends[2].name} 
//       image={friends[2].image} 
//       occupation={friends[2].occupation} 
//       location={friends[2].occupation}
//     />
//   </Wrapper>
// );

// better solution
// const App = () => (
//   <Wrapper>
//     <Title> Friends List </Title>
//     { friends.map( friend => <FriendCard
//       key={ friend.id }
//       name={ friend.name }
//       image={ friend.image}
//       occupation={friend.occupation}
//       location={friend.location}
//       />
//     )}
//   </Wrapper>
// );

// with .map()
const App = () => (
  <Wrapper>
    <Title> Friends List </Title>
    { friends.map( friend => <FriendCard
      {...friend}
      />
    )}
  </Wrapper>
);

export default App;
