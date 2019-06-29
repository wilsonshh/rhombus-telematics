import React, { Component } from 'react';
import { TouchableOpacity, FlatList, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { Block, Card, Text, Icon, Label } from '../components';
import * as theme from '../constants/theme';

/* Overview =============================================================== */
class Overview extends Component {
  constructor() {
    super();
    this.state = { data: {} };
  }

  // Set navigation title
  static navigationOptions = {
    headerTitle: (
      <Block row middle><Text h4>Overview</Text></Block>
    )
  }

  // Load data after the component 
  async componentDidMount() {
    this.setState({ loading: true })
    this.fetchData()
  }

  // Get vehicles data from the API
  async fetchData() {
    const URL = "https://swapi.co/api/vehicles"

    fetch(URL).then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          data: data
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // Get the sum of crew capacity
  getCrewCapacity() {
    const data = this.state.data.results;

    // If data exist get crew list and add the sum of crew
    if (data != undefined) {
      let cargo_capacity = data.map(u => (Number(u.crew)));

      const filter_cargo_capacity = cargo_capacity.filter(function (value) {
        return !Number.isNaN(value);
      });

      const add = (a, b) => (a) + (b)
      const sum = filter_cargo_capacity.reduce(add)

      return sum;
    }
  }

  // Get the sum of passenger capacity
  getPassengerCapacity() {
    const data = this.state.data.results;

    // If data exist get passengers list and add the sum of passengers
    if (data != undefined) {
      let cargo_capacity = data.map(u => (Number(u.passengers)));

      const filter_cargo_capacity = cargo_capacity.filter(function (value) {
        return !Number.isNaN(value);
      });

      const add = (a, b) => (a) + (b)
      const sum = filter_cargo_capacity.reduce(add)

      return sum;
    }
  }


  // Show total vehicles
  renderHeader() {
    const total = this.state.data.count;
    return <Card row middle style={styles.margin}>
      <Block flex={1.2} center middle style={{ marginRight: 20 }}>
        <Text light height={43} size={36} spacing={-0.45}>{total}</Text>
        <Text ligth caption center style={{ paddingHorizontal: 16, marginTop: 3 }}>
          TOTAL VEHICLES
              </Text>
      </Block>
      <Block>
        <Text paragraph color="black3">
          All vehicles are operating well.
              </Text>
      </Block>
    </Card>
  }


  // Show the total capacity
  renderStats() {
    return <Block row style={[styles.margin, { marginTop: 18 }]}>
      <Card middle style={{ marginRight: 7 }}>
        <Icon vehicle />
        <Text h2 style={{ marginTop: 17 }}>{this.getCrewCapacity()}</Text>
        <Text paragraph color="gray">Vehicles crew capacity</Text>
      </Card>

      <Card middle style={{ marginLeft: 7 }}>
        <Icon distance />
        <Text h2 style={{ marginTop: 17 }}>{this.getPassengerCapacity()}</Text>
        <Text paragraph color="gray">Vehicles passengers capacity</Text>
      </Card>
    </Block>
  }

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.overview}>
        <ScrollView contentContainerStyle={{ paddingVertical: 25 }}>

          {/* Show count */}
          {this.renderHeader()}

          {/* Stats for vehicle */}
          {this.renderStats()}

          {/* List of vehicles and brief details */}
          <Card
            title="VEHICLES "
            style={[styles.margin, { marginTop: 18 }]}
          >

            {/* Iterate through results from the API */}
            <FlatList
              data={this.state.data.results}
              renderItem={({ item: rowData }) => {
                return (
                  <Block style={styles.driver}>

                    {/* Show detail view and pass current row data */}
                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Detail', { data: rowData })}>
                      <Block row center>
                        <Block
                          flex={2}>
                          <Text h4>
                            {rowData.name}
                          </Text>
                          <Text paragraph color="gray">{rowData.model}</Text>
                        </Block>
                        <Block>
                          <Text paragraph right color="black">${rowData.cost_in_credits}</Text>
                          <Text paragraph right color="gray">{rowData.max_atmosphering_speed} max speed</Text>
                        </Block>
                      </Block>
                    </TouchableOpacity>
                  </Block>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </Card>
        </ScrollView>
      </SafeAreaView >
    )
  }
}

/* StyleSheet =============================================================== */
const styles = StyleSheet.create({
  overview: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
  },
  margin: {
    marginHorizontal: 25,
  },
  driver: {
    marginBottom: 11,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  }
});

/* exports =============================================== */
export default Overview;