import React from 'react'
import './AM.css'

function AM() {
  return (
    <div id = "AM">
        <div className="AM-title">
            <h1>Active Motif Bioinformatics Internship </h1>
        </div>
        <div className="AM-content">
            <div className="AM-info">
                <h3>More Info</h3>
                <p>
                    The AM is a student-led organization that provides food and other basic essentials to UC Davis students and staff who would like support in obtaining resources.
                </p>
                <p>
                    Role: Bioinformatics Intern
                </p>
                <p>
                    Project 1: Cleaning and Performing Analysis on Internal Database
                    <li>
                        Wrote Python script to parse through 2000+ files (company projects within the past few years) and extracted 5500+ unique data points. In the process, 25% of duplicate/invalid files were removed and valid files were complied an internal database.
                    </li>   
                    <li>
                        Wrote R scripts to visualize various relationships in internal database.
                    </li> 
                    <li>
                        A total of 20 box plots, 10 Venn diagrams, and 5 ridgeline plots were created. 
                        These diagrams helped Active Motif analyze their services for their customers, and see trends within their projects. 
                    </li>
                    <li>
                        Compared clients’ genomic samples to average historical values of the internal database using R.
                        Script would take in the client samples from the current project and what the user wants to compare (# of reads, FRIP scores, etc).
                        Sample would be plotted on a box and whisker plot to see where the value lies relative to previous projects. 
                        Box and whisker plot are average values from the 5500 samples.
                    </li>   
                </p>
                <p>
                    Project 2: External Dataset Curation for Precision Medicine 
                    <li>
                        Worked on creating a lung cancer cells atlas with the goal of generating a comprehensive 
                        biotech company knowledgebase by collecting relevant public data sets.
                    </li>   
                    <li>
                        Used R’s Seurat to add additional metadata to the datasets and visualize the cluster of cells (UMAPs) and their distribution
                    </li> 
                    <li>
                        Collected ~25 scRNA public datasets, ~10 scSpatial Transcriptome public datasets, and ~5 scATAC public datasets
                    </li> 
                </p>
                <p>
                    Languages and Tools: Python, R
                </p>
            </div>
        </div>
    </div>
  )
}

export default AM
