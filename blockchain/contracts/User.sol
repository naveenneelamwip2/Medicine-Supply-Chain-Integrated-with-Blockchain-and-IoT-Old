// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

// Define the User contract
contract User is ERC721Upgradeable, OwnableUpgradeable {
    // Initialize the contract
    function initialize() public initializer {
        __ERC721_init("User", "UD");
        __Ownable_init(msg.sender);
    }

    // Struct to store user details
    struct UserDetails {
        string name;
        uint256 age;
    }

    // Mapping from token ID to user details
    mapping(uint256 => UserDetails) private userDetails;

    // Event to log user details update
    event UserDetailsUpdated(uint256 tokenId, string name, uint256 age);

    // Function to mint a new user token
    function mintUser(address to, uint256 tokenId, string memory name, uint256 age) public onlyOwner {
        _mint(to, tokenId);
        userDetails[tokenId] = UserDetails(name, age);
    }

    function getUserDetails(uint256 tokenId) public view returns (string memory, uint256) {
        return (userDetails[tokenId].name, userDetails[tokenId].age);
    }

    function updateUserDetails(uint256 tokenId, string memory name, uint256 age) public onlyOwner {
        userDetails[tokenId].name = name;
        userDetails[tokenId].age = age;
        emit UserDetailsUpdated(tokenId, name, age);
    }
}
