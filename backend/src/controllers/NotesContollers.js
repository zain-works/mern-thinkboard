
import Note from "../models/Note_Schema.js";


export async function getallnotes(req,res){
    try {
        const notes =await Note.find().sort({createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in gettallnotes controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function getnote(req,res){
    try {
        const note =await Note.findById(req.params.id);
        if(!note) res.status(404).json({message: "Note not found"});
        res.status(200).json(note);
    } catch (error) {
        console.error("Error in getnote controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function createnote(req,res){
    try {
        const {title, content} = req.body;
        const NewNote =new Note({ title, content});
        await NewNote.save();
        res.status(201).json({message: "Note succesfully created"});
    } catch (error) {
        console.error("Error in createnote controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function updatenote(req,res){
    try {
        const{title, content}= req.body;
        const Updatednote =await Note.findByIdAndUpdate(req.params.id,{title,content}, {new: true,});
        if (!Updatednote) res.status(404).json({message: "Note not found"});
        res.status(200).json({message: Updatednote});
    } catch (error) {
        console.error("Error in updatenote controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function deletenote(req,res){
    try {
        const Deletednote =await Note.findByIdAndDelete(req.params.id);
        if (!Deletednote) res.status(404).json({message: "Note not found"});
        res.status(200).json({message: "Note deleted"});
    } catch (error) {
        console.error("Error in deletenote controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}