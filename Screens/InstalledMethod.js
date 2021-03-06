import React, {Component} from 'react';

import {
    StyleSheet, FlatList, Text, View, Alert, Image, ImageBackground, TextInput,
    Dimensions,
    AsyncStorage,
    TouchableOpacity,
    NetInfo,
    ScrollView,
    Picker
} from 'react-native';
import CheckBox from 'react-native-check-box'
import SinglePlyBrowseBy from "./SinglePlyBrowseBy";
const {width, height} = Dimensions.get('window');

export default class InstalledMethod extends Component {

    constructor(props) {
        super(props);
        this.state={
            isChecked:false,
            isAnother:false,
            singleSelected:true,
            doubleSelected:false,
            liquidSelected:false,
        };

        this.goBack = this.goBack.bind(this);
        this.showForm = this.showForm.bind(this);
        this.singlePlySelected= this.singlePlySelected.bind(this);
        this.doublePlySelected= this.doublePlySelected.bind(this);
        this.liquidSelected= this.liquidSelected.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    goBack()
    {
        this.props.navigation.pop();
    }
    showForm()
    {
        const {navigate} = this.props.navigation;
        navigate("QutoeFinalize");

    }

    singlePlySelected()
    {
        this.setState({singleSelected:!this.state.singleSelected,doubleSelected:false,liquidSelected:false});
       /* const {navigate} = this.props.navigation;
        navigate("SinglePlyBrowseBy", {
            header: "SINGLE PLY"
        });*/
    }
    doublePlySelected()
    {
        this.setState({doubleSelected:!this.state.doubleSelected,singleSelected:false,liquidSelected:false});
        /*const {navigate} = this.props.navigation;
        navigate("SinglePlyBrowseBy", {
            header: "DOUBLE PLY"
        });*/
    }
    liquidSelected()
    {
        this.setState({liquidSelected:!this.state.liquidSelected,doubleSelected:false,singleSelected:false});
       /* const {navigate} = this.props.navigation;
        navigate("LiquidDetails", {
            header: "LIQUID"
        });*/
    }

    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('../Images/login/background_img.png')}>
                <ScrollView>
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            height: 80,
                            width: '100%',
                            backgroundColor: '#DEF2FF',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center'
                        }}>


                        <Text style={{
                            fontWeight: '700',
                            color: '#015285',
                            alignSelf: 'center',
                            height: 50,
                            width: width / 2,
                            marginTop: 40,
                            marginLeft: width / 4
                        }}>
                           INSTALLED METHOD
                        </Text>

                    </View>


                    <View style={{flex:1,flexDirection:'column',marginTop:130, marginLeft:10}}>

                        <Text style={{color:'#015285',fontWeight:'bold',alignSelf:'center'}}>
                            ============ PRODUCT ============
                        </Text>

                        {this.state.singleSelected ?
                            <View style={{justifyContent: 'flex-end', marginLeft: 15, marginRight: 15,marginBottom:20,marginTop:height/12}}>
                                <TouchableOpacity onPress={this.singlePlySelected}>
                                    <View style={styles.buttonSelected}>
                                        <Text style={styles.buttonTextSelected}>TORCH</Text>
                                        <Image source={require('../Images/ProductSelection/ShapeNormal.png')} resizeMode="stretch" style={{width: 20, height: 20,marginTop:10,marginLeft:20,position:'absolute',right:20}}/>
                                    </View>
                                </TouchableOpacity>

                            </View>: <View style={{justifyContent: 'flex-end', marginLeft: 15, marginRight: 15,marginBottom:20,marginTop:height/12}}>
                                <TouchableOpacity onPress={this.singlePlySelected}>
                                    <View style={styles.buttonNext}>
                                        <Text style={styles.buttonTextNext}>TORCH</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>}
                        {this.state.doubleSelected ?
                            <View style={{justifyContent: 'flex-end', marginLeft: 15, marginRight: 15,marginBottom:20,marginTop:10}}>
                                <TouchableOpacity onPress={this.doublePlySelected}>
                                    <View style={styles.buttonSelected}>
                                        <Text style={styles.buttonTextSelected}>COLD APPLIED</Text>
                                        <Image source={require('../Images/ProductSelection/ShapeNormal.png')} resizeMode="stretch" style={{width: 20, height: 20,marginTop:10,marginLeft:20,position:'absolute',right:20}}/>
                                    </View>
                                </TouchableOpacity>

                            </View>: <View style={{justifyContent: 'flex-end', marginLeft: 15, marginRight: 15,marginBottom:20,marginTop:10}}>
                                <TouchableOpacity onPress={this.doublePlySelected}>
                                    <View style={styles.buttonNext}>
                                        <Text style={styles.buttonTextNext}>COLD APPLIED</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>}
                        {this.state.liquidSelected ?
                            <View style={{justifyContent: 'flex-end', marginLeft: 15, marginRight: 15,marginBottom:20,marginTop:10}}>
                                <TouchableOpacity onPress={this.liquidSelected}>
                                    <View style={styles.buttonSelected}>
                                        <Text style={styles.buttonTextSelected}>SELF ADHESIVE</Text>
                                        <Image source={require('../Images/ProductSelection/ShapeNormal.png')} resizeMode="stretch" style={{width: 20, height: 20,marginTop:10,marginLeft:20,position:'absolute',right:20}}/>
                                    </View>
                                </TouchableOpacity>

                            </View>: <View style={{justifyContent: 'flex-end', marginLeft: 15, marginRight: 15,marginBottom:20,marginTop:10}}>
                                <TouchableOpacity onPress={this.liquidSelected}>
                                    <View style={styles.buttonNext}>
                                        <Text style={styles.buttonTextNext}>SELF ADHESIVE</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>}

                    </View>
                    <View style={styles.profilebutton}>
                        <TouchableOpacity onPress={this.goBack}>
                            <Image source={require('../Images/ClientInfo/leftarrow.png')} resizeMode="stretch" style={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {

// Setting up View inside content in Vertically center.
        justifyContent: 'center',
        marginTop: 20

    },

    item: {
        padding: 10,
        fontSize: 22,
        height: 50,
        color:'#015285',
        marginLeft: 10,
        alignSelf: 'center'
    },
    item2: {
        padding: 10,
        fontSize: 22,
        height: 50,
        color:'#015285',
        marginRight:80,
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center',
        backgroundColor: '#F5FCFF'
    },

    inputContainer: {
        height:50,
        width:50,
        borderRadius:25,
        borderColor:'#00CA9D',
        borderWidth:1,
        marginTop:100,
        marginLeft: 20,
        alignSelf:'center'
    },
    inputContainer3: {
        marginLeft: 20,
        marginTop: 20,
        flexDirection: 'row',
        marginRight: 20,
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF'
    },
    input: {
        height: 40,
        width: '100%',

        margin: 10,
        padding: 10,
        color: '#000000'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'flex-end',
        padding: 15,
        borderRadius: 5,
        width:100,
        height: '100%',
        backgroundColor:'#DEF2FF'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00CA9D'
    },
    buttonTextNext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

    buttonTextSelected: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00CA9D'
    },

    buttonTextAdd: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

    buttonNext: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        backgroundColor: '#00CA9D',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff'
    },

    buttonSelected: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#00CA9D'
    },

    buttonAdd: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf:'flex-end',
        width:80,
        padding:5,
        height:30,
        marginRight:30,
        marginTop:10,
        backgroundColor: '#015285',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff'
    },
    profilebutton: {
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        left:20,
        width:30,
        height:30,
        marginTop:30
    },

});
