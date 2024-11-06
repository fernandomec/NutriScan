import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BCC9BF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0
    },
    containerPreferences: {
        flex: 1,
        backgroundColor: '#BCC9BF',
        padding: 20,
    },
    containerFlexStart: {
        flex: 1,
        backgroundColor: '#BCC9BF',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        margin: 0
    },
    containerFlexStartHome: {
        flex: 1,
        backgroundColor: '#BCC9BF',
        justifyContent: 'flex-start',
        padding: 10,
        margin: 0
    },
    scrollView: {
        backgroundColor: '#BCC9BF',
        flex: 1
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexGrow: 1,
        paddingBottom: '85%'
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    title: {
        fontSize: 40,
        color: 'white',
        fontFamily: 'RobotoSlab_700Bold'
    },
    titlePreferences: {
        fontSize: 24,
        color: '#344445',
        fontFamily: 'RobotoSlab_700Bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    textPreferences: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'RobotoSlab_400Regular',
        textAlign: 'center',
        lineHeight: 40,
        flexWrap: 'nowrap',
    },
    textItemPreferences: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'RobotoSlab_700Bold',
        marginRight: 15,
        backgroundColor: '#afbbb3',
        width: 40,
        height: 40,
        borderRadius: 50,
        textAlign: 'center',
        lineHeight: 40,
    },
    titleScan: {
        fontSize: 40,
        color: '#506668',
        fontFamily: 'RobotoSlab_700Bold'
    },
    image: {
        height: '30%',
        marginVertical: 20,
        resizeMode: 'contain'
    },
    welcomeText: {
        fontSize: 40,
        fontFamily: 'RobotoSlab_700Bold',
        color: '#344445',
        textAlign: 'center',
        marginVertical: 10
    },
    welcomeTextFPE: {
        fontSize: 40,
        fontFamily: 'RobotoSlab_700Bold',
        color: '#344445',
        textAlign: 'center',
        margin: 0
    },
    textAlignCenter: {
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 0,
        padding: 0
    },
    button: {
        width: '80%',
        height: 52,
        backgroundColor: '#506668',
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonIcon: {
        width: 60,
        height: 60,
        aspectRatio: 1,
        backgroundColor: '#506668',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backAndUser: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20
    },
    back: {
        width: '100%',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'RobotoSlab_400Regular',
        fontSize: 20,
        textAlign: 'center',
    },
    Link: {
        width: '100%',
        textAlign: 'center',
        height: '50%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontSize: 20,
        fontFamily: 'RobotoSlab_400Regular',
        color: '#344445',
        marginVertical: 5,
        alignSelf: 'flex-start',
        marginLeft: '10%'
    },
    inputContainer: {
        width: '80%',
        marginBottom: 24
    },
    inputPinContainer: {
        flexDirection: 'row',
        width: '80%',
        marginBottom: 24
    },
    input: {
        width: '100%',
        height: 56,
        backgroundColor: '#FFFFFF',
        borderColor: '#506668',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 16,
        fontSize: 16,
        fontFamily: 'RobotoSlab_400Regular'
    },
    inputPin: {
        width: '20%',
        height: 56,
        backgroundColor: '#FFFFFF',
        borderColor: '#506668',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 40,
        margin: 2.5,
        fontFamily: 'RobotoSlab_400Regular',
        textAlign: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        width: '80%',
        marginBottom: 24
    },
    checkbox: {
        marginRight: 10
    },
    checkboxLabel: {
        fontFamily: 'RobotoSlab_400Regular',
        fontSize: 16,
        color: '#506668'
    },
    link: {
        fontFamily: 'RobotoSlab_400Regular',
        fontSize: 20,
        color: '#506668',
        textDecorationLine: 'underline',
        marginTop: 8
    },
    linhaUser: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    backgroundUserConfig: {
        width: width * 0.45,
        height: width * 0.45,
        backgroundColor: '#506668',
        borderRadius: (width * 0.45) / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconUserConfig: {
        fontSize: width * 0.25,
        tintColor: '#FFFFFF'
    },
    circuloUser: {
        width: width * 0.15,
        height: width * 0.15,
        backgroundColor: '#506668',
        borderRadius: (width * 0.15) / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    buttonUser: {
        width: width * 0.65,
        backgroundColor: '#506668',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgButton: {
        fontSize: width * 0.09,
        color: 'white',
    },
    buttonTextUser: {
        color: 'white',
        fontFamily: 'RobotoSlab_400Regular',
        fontSize: 16,
        textAlign: 'left',
    },
    inputEditUser: {
        width: '100%',
        height: 35,
        backgroundColor: '#BCC9BF',
        borderColor: '#506668',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 16,
        fontSize: 16,
        fontFamily: 'RobotoSlab_400Regular'
    },
    preferenceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    preferenceNumber: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#BFCAC5',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    preferenceNumberText: {
        fontSize: 14,
        color: '#333',
    },
    preferenceText: {
        fontSize: 16,
        color: '#333',
        flex: 1,
    },
    toggleButton: {
        width: 70,
        height: 33,
        borderRadius: 30,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    circle: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        backgroundColor: '#E8E8E8',
        position: 'absolute',
        left: 5,
    },
    confirmButton: {
        backgroundColor: '#566E63',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
        marginTop: 30,
    },
    confirmButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    rowContainerPreferences: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    rowContainerHome: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        marginVertical: 40,
    },
    leftView: {
        marginRight: 10,
        flexDirection: 'row',
    },
    rightView: {
        marginLeft: 10,
    },
    horaData: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#BCC9BF',
    },
    diaContainer: {
        marginRight: 8,
    },
    dia: {
        fontSize: 48,
        fontFamily: 'RobotoSlab_700Bold',
        color: '#344445',
    },
    dataContainer: {
        justifyContent: 'center',
    },
    data: {
        fontSize: 15,
        fontFamily: 'RobotoSlab_400Regular',
        color: '#344445',
    },
    homeText: {
        fontSize: 20,
        fontFamily: 'RobotoSlab_700Bold',
        color: '#344445',
        textAlign: 'left',
        marginLeft: 10
    },
    productsHome: {
        flexDirection: 'row',
    },
    cardItem: {
        backgroundColor: 'white',
        width: (width - 55) / 2,
        height: 400,
        borderRadius: 10,
        padding: 5,
        marginRight: 10,
    },
    cardImg: {
        width: '100%',
        height: 200,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 5,
        zIndex: 5,
        tintColor: 'black',
    },
    cardTitle: {
        fontFamily: 'RobotoSlab_700Bold',
        fontSize: 16,
        color: '#1A1A1A',
        textAlign: 'center',
        marginBottom: 6
    },
    textCard: {
        fontFamily: 'RobotoSlab_700Bold',
        fontSize: 11.5,
        color: '#535353',
    },
    rowCardText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      searchInput: {
        flex: 1,
        fontSize: 16,
        paddingHorizontal: 10,
      },
      iconFilter: {
        fontSize: 24,
        color: '#344445',
        marginRight: 10,
      },
      iconSearch: {
        fontSize: 24,
        color: '#344445',
      },
      modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: 'RobotoSlab_700Bold',
        color: '#344445',
        marginBottom: 10,
    },
    filterOption: {
        fontSize: 16,
        fontFamily: 'RobotoSlab_400Regular',
        color: '#344445',
        paddingVertical: 10,
        textAlign: 'center',
        width: '100%',
    },
    saveButton: {
        alignSelf: 'flex-end',
        backgroundColor: '#506668',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        marginBottom: 10,
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    slider: {
        width: '100%',
        height: 40,
    },
    
});

export default styles;
