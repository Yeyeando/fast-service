import React from "react";

function CancelAdd() {
  return (
    <div className="button-options">
      <button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
      <button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </div>
  );
}

export default CancelAdd;
