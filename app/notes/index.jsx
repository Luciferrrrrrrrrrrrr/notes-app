import { CurrentRenderContext } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import NoteList from "@/components/NoteList";
import AddNoteModal from "@/components/AddNoteModal";


const NoteScreen = () => {
    const [notes, setNotes ] = useState([
        {id : 1, text : "Note One"},
        {id : 2, text : "Note Two"},
        {id : 3, text : "Note Three"},
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newNotes, setNewNote] = useState ('');

    /*Add Note */
    const addNote =() =>{
        if (newNotes.trim() === '') return;

        setNotes ((prevNotes)=>[
            ...prevNotes,
            {id: Date.now.toString(), text: newNotes}
        ]);

        setNewNote();
        setModalVisible(false);
    };


    return (<View style ={styles.container}>
       {/*Note List */}
       <NoteList notes ={notes}/>
        <TouchableOpacity style = {styles.addButton}onPress={()=> setModalVisible(true)}>
        <Text style={styles.addButtonText }>+ Add Note</Text>
        </TouchableOpacity>
        {/*Modal */}
        <AddNoteModal
        modalVisible ={modalVisible}
        setModalVisible= {setModalVisible}
        newNotes ={newNotes}
        setNewNote={setNewNote}
        addNote={addNote}
        />
        
    </View>);

};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        padding : 20,
        
        backgroundcolor :'#fff'

    },
    
    addButton:{
        position: 'absolute',
        bottom : 20,
        left: 20,
        right: 20,
        backgroundColor:'#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText:{
        color: '#fff',
        fontSize: 18,
        alignItems: 'bold',
    },
    
    cancelButton:{
        backgroundColor:'#ccc',
        flex: 1,
        borderRadius: 5,
        padding : 10,
        marginRight: 10,
        alignItems: 'center',
    },
    cancelButtontext:{
        fontSize:16,
        color:'#333',
    },
    saveButton:{
        backgroundColor:'#007bff',
        padding : 10,
        borderRadius: 5,
        flex:1,
        alignItems:'center',
    },
    saveButtonButtonText:{
        fontSize: 16,
        color: '#fff'
    },
});


export default NoteScreen;