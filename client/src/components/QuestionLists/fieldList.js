import React from 'react';

const FieldList = (props) => {

    return(

        <select id="legalFields" name="field" placeholder="Legal field.." onChange={e=> props.setField(e.target.value)} required>
            <option value="" disabled selected>Legal field...</option>
            <option value="Administrative Law">Administrative Law</option> 
            <option value="Animal Law">Animal Law</option>
            <option value="Banking Law">Banking Law</option>
            <option value="Bankruptcy Law">Bankruptcy Law</option>
            <option value="Civil Law">Civil Law</option>
            <option value="Competition Law">Competition Law</option>
            <option value="Constitutional Law">Constitutional Law</option>
            <option value="Contract Law">Contract Law</option>
            <option value="Corporate Law">Corporate Law</option>
            <option value="Criminal Law">Criminal Law</option>
            <option value="Employment Law">Employment Law</option>
            <option value="Energy Law">Energy Law</option>
            <option value="Environmental Law">Environmental Law</option>
            <option value="Family Law">Family Law</option>
            <option value="Immigration Law">Immigration Law</option>
            <option value="Insurance Law">Insurance Law</option>
            <option value="Intellectual property Law">Intellectual property Law</option>
            <option value="International Law">International Law</option>
            <option value="Labour Law">Labour Law</option>
            <option value="Litigation Law">Litigation Law</option>
            <option value="Media Law">Media Law</option>
            <option value="Medical Law">Medical Law</option>
            <option value="Military Law">Military Law</option>
            <option value="Property Law">Property Law</option>
            <option value="Real estate Law">Real estate Law</option>
            <option value="Securities Law">Securities Law</option>
            <option value="Space Law">Space Law</option>
            <option value="Sports Law">Sports Law</option>
            <option value="Tax Law">Tax Law</option>
            <option value="Technology Law">Technology Law</option>
        </select>	
				
    )
}

export default FieldList;