// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract User is ERC721Upgradeable, OwnableUpgradeable {
    function initialize() public initializer {
        __ERC721_init("User", "UD");
        __Ownable_init(msg.sender);
    }

    mapping(string => string) private userHashes;

    event UserDetailsUpdated(string userId, string userHash);

    function mintUser(string memory userId, string memory userHash) public onlyOwner {
        userHashes[userId] = userHash;
        emit UserDetailsUpdated(userId, userHash);
    }

    function getUserHash(string memory userId) public view returns (string memory) {
        return userHashes[userId];
    }

    function updateUserDetails(string memory userId, string memory userHash) public onlyOwner {
        userHashes[userId] = userHash;
        emit UserDetailsUpdated(userId, userHash);
    }
}